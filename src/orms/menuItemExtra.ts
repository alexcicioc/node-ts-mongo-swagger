import { DataTypes } from 'sequelize';
import { Orm } from './orm';
import { ExtraOrm } from './extra';

export class MenuItemExtraOrm extends Orm {
  public constructor() {
    super(
      'menuItemExtra',
      {
        menuItemId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        extraId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['menuItemId', 'extraId'],
          },
        ],
      },
    );
    this.sequelizeSchema.belongsTo(new ExtraOrm().sequelizeSchema, { as: 'extra' });
  }
}
