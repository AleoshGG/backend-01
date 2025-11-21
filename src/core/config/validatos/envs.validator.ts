import * as Joi from 'joi';
import { EnvsI } from '../domain/EnvsI';

export const envsValidator = Joi.object<EnvsI>({
  PORT: Joi.number().required().description('PORT of serving API'),
}).unknown(true);
