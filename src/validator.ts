import Joi, { CustomHelpers, ObjectSchema } from 'joi';
import cuid from 'cuid';

import { logger } from './logger';
import { BadRequestError } from './apiError';
import { NextFunction, Request, Response } from 'express';

export enum ValidationSource {
	BODY = 'body',
	HEADER = 'headers',
	QUERY = 'query',
	PARAM = 'params'
};

export const JoiCUID = () => Joi.string().custom((value: string, helpers: CustomHelpers) => {
	if (!cuid.isCuid(value)) return helpers.error('any.invalid');
	return value;
}, 'CUID Validation');

export const validator = (schema: ObjectSchema, source: ValidationSource = ValidationSource.BODY) =>
	(req: Request, _res: Response, next: NextFunction) => {
		try {
			const { error } = schema.validate(req[source]);

			if (!error) return next();
			logger.error(error);

			const { details } = error;
			const message = details.map(i => i.message.replace(/['"]+/g, '')).join(',');
			logger.info(message);

			return next(new BadRequestError(message));
		} catch (error) {
			return next(error);
		}
	};