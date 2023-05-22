import { createLogger, transports, format } from 'winston';

const logLevel = process.env.NODE_ENV === 'production' ? 'verbose' : 'debug';

const consoleTransports = new transports.Console({
	level: logLevel,
	format: format.combine(
		format.errors({ stack: true }),
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		format.printf(({ level, message, timestamp, stack }) => {
			if (stack) return `${timestamp} ${level}: ${message}\n${stack}`;// Custom format for error logs
			return `${timestamp} ${level}: ${message}`;// Default format for other logs
		})
	)
})

const winstonLogger = createLogger({
	transports: consoleTransports,
	exceptionHandlers: consoleTransports,
	exitOnError: false
});

export const logger = winstonLogger;