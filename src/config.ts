export const mysqlConnection = {
  host: process.env.MYSQL_HOST || 'db',
  port: process.env.MYSQL_PORT || '3306',
  // username: process.env.MYSQL_USERNAME || 'root',
  username: 'root',
  password: 'example',
  // password: process.env.MYSQL_PASSWORD || 'example',
  databaseName: process.env.MYSQL_DATABASE || 'menu',
};

export const specPath = './spec/menu-api.yaml';

export const ENVIRONMENT = process.env.ENVIRONMENT || 'local';

const PRODUCTION_ENVS = ['staging', 'production'];

export const loggerConfig = {
  level: PRODUCTION_ENVS.includes(ENVIRONMENT) ? 'info' : 'trace',
};
