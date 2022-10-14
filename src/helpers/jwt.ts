import { promisify } from 'util';
import { sign, verify, decode } from 'jsonwebtoken';
import { InternalError, BadTokenError, TokenExpiredError } from '../errors';
import { logger } from './logger';

/*
 * issuer 		—  Software organization who issues the token.
 * subject 		—  Intended user of the token.
 * audience 	—  Basically identity of the intended recipient of the token.
 * expiresIn —  Expiration time after which the token will be invalid.
 * algorithm 	—  Encryption algorithm to be used to protect the token.
*/

export class JWT {
	private publicKey: string;
	private privateKey: string;

	constructor(publicKey: string, privateKey: string) {
		this.publicKey = publicKey
		this.privateKey = privateKey
	}

	async encode(payload: JwtPayload): Promise<string> {
		const cert = this.privateKey
		if (!cert)
			throw new InternalError('Token generation failure');
		// @ts-ignore
		return promisify(sign)({ ...payload }, cert, { algorithm: 'RS256' });
	}


	/**
	 * This method checks the token and returns the decoded data when token is valid in all respect
	 */
	async validate(token: string, validations: ValidationParams): Promise<JwtPayload> {
		const cert = this.publicKey
		try {
			// @ts-ignore
			return <JwtPayload>await promisify(verify)(token, cert, validations);
		} catch (error: any) {
			logger.debug(error);
			if (error && error.name === 'TokenExpiredError') throw new TokenExpiredError();
			throw new BadTokenError();
		}
	}


	/**
	 * This method checks the token and returns the decoded data even when the token is expired
	 */
	async decode(token: string, validations: ValidationParams): Promise<JwtPayload> {
		const cert = this.publicKey
		try {
			// token is verified if it was encrypted by the private key
			// and if is still not expired then get the payload
			// @ts-ignore
			return <JwtPayload>await promisify(verify)(token, cert, validations);
		} catch (error: any) {
			logger.debug(error);
			if (error && error.name === 'TokenExpiredError') {
				// if the token has expired but was encryped by the private key
				// then decode it to get the payload
				// @ts-ignore
				return <JwtPayload>decode(token);
			}
			else {
				// throws error if the token has not been encrypted by the private key
				// or has not been issued for the user
				throw new BadTokenError();
			}
		}
	}
}

export class ValidationParams {
	issuer: string;
	audience: string;
	subject: string;
	constructor(issuer: string, audience: string, subject: string) {
		this.issuer = issuer;
		this.audience = audience;
		this.subject = subject;
	}
}

export class JwtPayload {
	aud: string;
	sub: string;
	iss: string;
	iat: number;
	exp: number;
	prm: string;

	constructor(issuer: string, audience: string, subject: string, param: string, validity: number) {
		this.iss = issuer;
		this.aud = audience;
		this.sub = subject;
		this.iat = Math.floor(Date.now() / 1000);
		this.exp = this.iat + (validity * 24 * 60 * 60);
		this.prm = param;
	}
}