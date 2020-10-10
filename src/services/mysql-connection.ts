import { Sequelize } from 'sequelize';
import { mysqlConnection } from '../config';

let sequelize: Sequelize = null;

export const getConnection = (): Sequelize => {
  if (!sequelize) {
    sequelize = new Sequelize(
      mysqlConnection.databaseName,
      mysqlConnection.username,
      mysqlConnection.password,
      {
        host: mysqlConnection.host,
        dialect: 'mysql',
      },
    );
  }

  return sequelize;
};
