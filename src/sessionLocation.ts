import { NextFunction, Request, Response } from 'express';
import requestIp from 'request-ip';
import geoip from 'fast-geoip';

export const getRequestIpAddress = requestIp.mw()

export const setSessionLocation = async (req: Request, res: Response, next: NextFunction) => {
  const ip: string | undefined = req.clientIp;
  const geoLocation = await geoip.lookup(ip!);
  res.locals.sessionLocation = geoLocation;
  return next();
};
