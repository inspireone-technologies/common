import { createLogger, transports, format } from 'winston';
import fs from 'fs';
import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';

let dir = process.env.LOG_DIR;
if (!dir) dir = path.resolve('logs');

// create directory if it is not present
if (!fs.existsSync(dir)) {
	// Create the directory if it does not exist
	fs.mkdirSync(dir);
}

const logLevel = process.env.NODE_ENV === 'development' ? 'debug' : 'warn';

const rotateOptions = {
	level: 'error',
	filename: dir + '/%DATE%.log',
	datePattern: 'YYYY-MM-DD',
	zippedArchive: true,
	timestamp: true,
	maxSize: '20m',
	maxFiles: '14d'
};

const consoleTransports = new transports.Console({
	level: logLevel,
	format: format.combine(
		format.errors({ stack: true }),
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
	)
})

const winstonLogger = createLogger({
	transports: consoleTransports,
	exceptionHandlers: [new DailyRotateFile(rotateOptions)],
	exitOnError: false
});

export const logger = winstonLogger;