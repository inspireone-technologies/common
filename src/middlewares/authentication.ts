import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AuthFailureError } from '../errors';
import { JwtPayload } from '../helpers/jwt';

declare global {
  namespace Express {
    interface Request {
      session?: any;
      payload?: JwtPayload;
    }
  }
}

export const authentication = (publicKey: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.accessToken) return next();
    if (!req.session?.userId) return next();
    if (!req.session?.username) return next();

    const payload = verify(req.session.accessToken, publicKey) as JwtPayload;

    if (!payload || !payload.iss || !payload.aud || !payload.prm
      || payload.username !== req.session.username
      || payload.userId !== req.session.userId)
      throw new AuthFailureError('Invalid Access Token');

    res.locals.payload = payload;
    res.locals.username = req.session.username;
    res.locals.userId = req.session.userId;

    return next();
  };