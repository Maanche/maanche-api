import { config as loadEnv } from 'dotenv';

loadEnv();

const loadFromEnv = (key: string) => {
  const value = process.env[key];
  if (value !== 'undefined') {
    return value;
  }
  throw new Error(`process.env doesn't have the key ${key}`);
};

const config = {
  port: loadFromEnv('PORT'),
  dbUri: loadFromEnv('DB_URI'),
  jwtSecret: loadFromEnv('JWT_SECRET'),
  jwtExpire: loadFromEnv('JWT_EXPIRE'),
  cookieExpire: loadFromEnv('COOKIE_EXPIRE'),
  smptHost: loadFromEnv('SMPT_HOST'),
  smptPort: loadFromEnv('SMPT_PORT'),
  smptService: loadFromEnv('SMPT_SERVICE'),
  smptMail: loadFromEnv('SMPT_MAIL'),
  smptPassword: loadFromEnv('SMPT_PASSWORD'),
  stripeSecretKey: loadFromEnv('STRIPE_SECRECT_KEY'),
  modelApi: loadFromEnv('MODEL_API')
};
export { config };
