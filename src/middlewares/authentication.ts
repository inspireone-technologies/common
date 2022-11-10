import { decrypt } from './../helpers/encryption';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AccessTokenError, AuthFailureError } from '../errors';
import { JwtPayload } from '../helpers/jwt';

declare global {
  namespace Express {
    interface Request {
      headers?: any;
      payload?: JwtPayload;
    }
  }
}

export const authentication = (publicKey: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers['x-access-token']) throw new AuthFailureError('Unable to find access token.')
    if (!req.headers['x-user-id']) throw new AuthFailureError('Unable to find user Id.')
    if (!req.headers['x-user-name']) throw new AuthFailureError('Unable to find user name')

    const payload = verify(req.headers['x-access-token'].toString(), publicKey) as JwtPayload;

    const userId = decrypt(req.headers['x-user-id'].toString())
    const username = decrypt(req.headers['x-user-name'].toString())

    if (!payload || !payload.iss || !payload.aud || !payload.prm || payload.username !== username || payload.userId !== userId)
      throw new AccessTokenError('Invalid Access Token');

    res.locals.payload = payload;
    res.locals.username = username;
    res.locals.userId = userId;

    return next();
  };