import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { extractCommonParams } from './helpers/query-params';
import { AppRequest } from '../types/request';

export const getCategories = async (req: AppRequest, res: Response): Promise<Response> => {
  const { categoryOrm } = req.orms;

  const commonParams = extractCommonParams(req);
  const categories = await categoryOrm.getAll({
    ...commonParams,
  });

  const total =
    categories.length === commonParams.limit ? await categoryOrm.count() : categories.length;
  res.status(StatusCodes.OK);
  return res.json({ results: categories, total });
};

export const getCategory = async (req: AppRequest, res: Response): Promise<Response> => {
  const { categoryOrm } = req.orms;

  const category = await categoryOrm.getById(req.pathParams.id);
  if (!category) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  return res.status(StatusCodes.OK).send(category);
};

export const updateCategory = async (req: AppRequest, res: Response): Promise<Response> => {
  const { categoryOrm } = req.orms;

  const category = await categoryOrm.getById(req.pathParams.id);
  if (!category) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  category.setAttributes(req.body);
  await category.save();
  return res.status(StatusCodes.OK).send();
};

export const deleteCategory = async (req: AppRequest, res: Response): Promise<Response> => {
  const { categoryOrm } = req.orms;

  const result = await categoryOrm.deleteById(req.pathParams.id);
  if (!result) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  return res.status(StatusCodes.OK).send();
};

export const createCategory = async (req: any, res: Response): Promise<Response> => {
  const { categoryOrm } = req.orms;

  const { body } = req;
  const category = await categoryOrm.create(body);
  return res.status(StatusCodes.CREATED).send({ id: category.getDataValue('id') });
};
