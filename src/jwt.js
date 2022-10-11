import { promisify } from 'util';
import { sign, verify, decode } from 'jsonwebtoken';
import { InternalError, BadTokenError, TokenExpiredError } from './apiError';
import logger from './logger';

/*
 * issuer 		—  Software organization who issues the token.
 * subject 		—  Intended user of the token.
 * audience 	—  Basically identity of the intended recipient of the token.
 * expiresIn —  Expiration time after which the token will be invalid.
 * algorithm 	—  Encryption algorithm to be used to protect the token.
*/

export const encode = async (payload, privateKey) => {
	if (!privateKey)
		throw new InternalError('Token generation failure');
	return promisify(sign)({ ...payload }, privateKey, { algorithm: 'RS256' });
};

/**
 * This method checks the token and returns the decoded data when token is valid in all respect
 */
export const validate = async (token, validations, publicKey) => {
	try {
		return await promisify(verify)(token, publicKey, validations);
	} catch (e) {
		logger.debug(e);
		if (e && e.name === 'TokenExpiredError') throw new TokenExpiredError();
		throw new BadTokenError();
	}
};

/**
 * This method checks the token and returns the decoded data even when the token is expired
 */
export const decodeToken = async (token, validations, publicKey) => {
	try {
		// token is verified if it was encrypted by the private key
		// and if is still not expired then get the payload
		return await promisify(verify)(token, publicKey, validations);
	} catch (e) {
		logger.debug(e);
		if (e && e.name === 'TokenExpiredError') {
			// if the token has expired but was encryped by the private key
			// then decode it to get the payload
			return decode(token);
		}
		else {
			// throws error if the token has not been encrypted by the private key
			// or has not been issued for the user
			throw new BadTokenError();
		}
	}
};

export class ValidationParams {
	issuer;
	audience;
	subject;
	constructor(issuer, audience, subject) {
		this.issuer = issuer;
		this.audience = audience;
		this.subject = subject;
	}
}

export class JwtPayload {
	aud;
	sub;
	iss;
	iat;
	exp;
	prm;

	constructor(issuer, audience, subject, param, validity) {
		this.iss = issuer;
		this.aud = audience;
		this.sub = subject;
		this.iat = Math.floor(Date.now() / 1000);
		this.exp = this.iat + (validity * 24 * 60 * 60);
		this.prm = param;
	}
}