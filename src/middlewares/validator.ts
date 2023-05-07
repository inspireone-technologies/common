import Joi, { CustomHelpers, ObjectSchema } from 'joi';
import cuid from 'cuid';

import { logger } from '../helpers/logger';
import { BadRequestError } from '../errors';
import { NextFunction, Request, Response } from 'express';

export enum ValidationSource {
	BODY = 'body',
	HEADER = 'headers',
	QUERY = 'query',
	PARAM = 'params'
};

export const joi = Joi;

export const JoiCUID = () => Joi.string().length(25);

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