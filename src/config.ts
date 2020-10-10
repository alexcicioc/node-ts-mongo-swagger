export const mongoConnection = {
  host: process.env.MONGO_HOST || 'mongo',
  port: process.env.MONGO_PORT || '27017',
  username: process.env.MONGO_USERNAME || 'root',
  password: process.env.MONGO_PASSWORD || 'example',
};

export const specPath = './spec/menu-api.yaml';

export const ENVIRONMENT = process.env.ENVIRONMENT || 'local';

const PRODUCTION_ENVS = ['staging', 'production'];

export const loggerConfig = {
  level: PRODUCTION_ENVS.includes(ENVIRONMENT) ? 'info' : 'trace',
};
