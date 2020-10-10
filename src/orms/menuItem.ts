import { DataTypes } from 'sequelize';
import { Orm } from './orm';
import { MenuItemExtraOrm } from './menuItemExtra';

export class MenuItemOrm extends Orm {
  public constructor() {
    super(
      'menuItem',
      {
        menuId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
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
      },
      {
        indexes: [
          {
            unique: false,
            fields: ['menuId'],
          },
          {
            unique: false,
            fields: ['categoryId'],
          },
        ],
      },
    );

    this.sequelizeSchema.hasMany(new MenuItemExtraOrm().sequelizeSchema, { as: 'menuItemExtras' });
  }
}
