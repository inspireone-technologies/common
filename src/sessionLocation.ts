import { NextFunction, Request, Response } from 'express';
import requestIp from 'request-ip';
import geoip from 'fast-geoip';

export const getRequestIpAddress = requestIp.mw()

export const setSessionLocation = async (req: Request, res: Response, next: NextFunction) => {
  const ip: string | undefined = req.clientIp;
  const geoLocation: any = await geoip.lookup(ip!);
  if (geoLocation) geoLocation.coOrdinates = { longtitude: geoLocation?.ll[0], latitude: geoLocation?.ll[1] };
  res.locals.sessionLocation = geoLocation;
  return next();
};
