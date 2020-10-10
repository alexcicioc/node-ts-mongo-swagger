import { DataTypes } from 'sequelize';
import { Orm } from './orm';

export class CategoryOrm extends Orm {
  public constructor() {
    super('category', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  }
}
