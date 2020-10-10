import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { extractCommonParams } from './helpers/query-params';
import { AppRequest } from '../types/request';

export const getMenus = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuOrm } = req.orms;

  const commonParams = extractCommonParams(req);
  const filters = { status: req.query.status };
  const menus = await menuOrm.getAll({
    where: filters,
    ...commonParams,
  });

  const total =
    menus.length === commonParams.limit ? await menuOrm.count({ where: filters }) : menus.length;
  return res.status(StatusCodes.OK).send({ results: menus, total });
};

export const getMenu = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuOrm } = req.orms;

  const menu = await menuOrm.getById(req.pathParams.id);
  if (!menu) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  return res.status(StatusCodes.OK).send(menu);
};

export const updateMenu = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuOrm } = req.orms;

  const menu = await menuOrm.getById(req.pathParams.id);
  if (!menu) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  menu.setAttributes(req.body);
  await menu.save();
  return res.status(StatusCodes.OK).send();
};

export const deleteMenu = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuOrm } = req.orms;

  const menu = await menuOrm.getById(req.pathParams.id);
  if (!menu) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  await menu.destroy();
  return res.status(StatusCodes.OK).send();
};

export const createMenu = async (req: AppRequest, res: Response): Promise<Response> => {
  const { menuOrm } = req.orms;

  const { body } = req;
  const menu = await menuOrm.create({ title: body.title, status: body.status });
  return res.status(StatusCodes.CREATED).send({ id: menu.getDataValue('id') });
};
