import { ModelCtor } from 'sequelize/types';
import { Model } from 'sequelize';
import { ModelAttributes, ModelOptions } from 'sequelize/types/lib/model';
import { getConnection } from '../services/mysql-connection';

interface Query {
  where?: object;
  limit?: number;
  offset?: number;
  include?: any[];
}

export class Orm {
  public sequelizeSchema: ModelCtor<Model<any, any>>;

  public constructor(tableName: string, schema: ModelAttributes<any>, options: ModelOptions = {}) {
    this.sequelizeSchema = getConnection().define(tableName, schema, options);
  }

  public getById(id: number): Promise<Model> {
    return this.sequelizeSchema.findByPk(id);
  }

  public getAll(query: Query = {}): Promise<Model[]> {
    return this.sequelizeSchema.findAll(query);
  }

  public count(query: Query = {}): Promise<number> {
    return this.sequelizeSchema.count(query);
  }

  public create(object: any): Promise<Model> {
    return this.sequelizeSchema.create(object);
  }

  public deleteById(id: number): Promise<number> {
    return this.sequelizeSchema.destroy({ where: { id } });
  }

  public updateSchema(): Promise<Model> {
    return this.sequelizeSchema.sync({ alter: true });
  }
}
