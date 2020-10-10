import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { extractCommonParams } from './helpers/query-params';
import { AppRequest } from '../types/request';

export const getMenuItems = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuItemOrm, menuItemExtraOrm } = req.orms;

  const commonParams = extractCommonParams(req);
  const filters: any = { menuId: req.pathParams.id };
  if (req.query.categoryId) {
    filters.categoryId = req.query.categoryId;
  }
  // menuItemExtraOrm.sequelizeSchema.hasOne(extraOrm.sequelizeSchema, { as: 'extraDetails' });
  const menuItems = await menuItemOrm.getAll({
    where: filters,
    ...commonParams,
    include: [
      {
        model: menuItemExtraOrm.sequelizeSchema,
        as: 'menuItemExtras',
        include: ['extra'],
      },
    ],
  });
  // @ts-ignore
  console.log(menuItems[0].extras);

  const total =
    menuItems.length === commonParams.limit
      ? await menuItemOrm.count({ where: filters })
      : menuItems.length;
  return res.status(StatusCodes.OK).send({ results: menuItems, total });
};

export const updateMenuItem = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuItemOrm } = req.orms;

  const menuItem = await menuItemOrm.getById(req.pathParams.id);
  if (!menuItem) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  menuItem.setAttributes(req.body);
  await menuItem.save();
  return res.status(StatusCodes.OK).send();
};

export const deleteMenuItem = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuItemOrm } = req.orms;

  const count = await menuItemOrm.deleteById(req.pathParams.id);
  if (!count) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  return res.status(StatusCodes.OK).send();
};

export const createMenuItem = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuItemOrm } = req.orms;

  const { body } = req;
  const menuItem = await menuItemOrm.create({ ...body, menuId: req.pathParams.id });
  return res.status(StatusCodes.CREATED).send({ id: menuItem.getDataValue('id') });
};
