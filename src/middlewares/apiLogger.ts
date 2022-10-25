import { logger } from './../helpers/logger';
import expressWinston from 'express-winston'

export const apiLogger = expressWinston.logger({
  winstonInstance: logger,
  meta: false,
  expressFormat: true,
  colorize: false,
  statusLevels: true,
  skip: (req, _res) => req.method === 'OPTIONS'
})