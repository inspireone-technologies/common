import { transports, format } from 'winston';
import expressWinston from 'express-winston'

export const apiLogger = expressWinston.logger({
  transports: [new transports.Console()],
  meta: false,
  expressFormat: true,
  colorize: false,
  statusLevels: true,
  skip: (req, _res) => req.method === 'OPTIONS'
})

export const errorLogger = expressWinston.errorLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.errors({ stack: true }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.json()
  ),
  dynamicMeta: (req, res, _err) => { return { body: req.body, locals: res.locals, headers: req.headers } },
  skip: (req, _res) => req.method === 'OPTIONS'
})