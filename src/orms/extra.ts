import { DataTypes } from 'sequelize';
import { Orm } from './orm';

export class ExtraOrm extends Orm {
  public constructor() {
    super('extra', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
    });
  }
}
