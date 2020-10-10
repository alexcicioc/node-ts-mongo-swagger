import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppRequest } from '../types/request';

export const assignExtra = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuItemExtraOrm } = req.orms;

  const { body } = req;
  const menuItem = await menuItemExtraOrm.create({ ...body, menuItemId: req.pathParams.id });
  return res.status(StatusCodes.CREATED).send({ id: menuItem.getDataValue('id') });
};
