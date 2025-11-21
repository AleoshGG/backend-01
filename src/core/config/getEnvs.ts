import { EnvsI } from './domain/EnvsI';
import { envsValidator } from './validatos/envs.validator';

export function getEnvs(): EnvsI {
  const { error, value } = envsValidator.validate({
    ...process.env,
  });

  if (error) {
    throw new Error(`Falied to load enviroment variables ${error}`);
  }

  return {
    PORT: value.PORT
  }
}
