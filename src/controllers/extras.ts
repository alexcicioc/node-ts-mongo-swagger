import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { extractCommonParams } from './helpers/query-params';
import { AppRequest } from '../types/request';

export const getExtras = async (req: AppRequest, res: Response): Promise<Response> => {
  const { extraOrm } = req.orms;

  const commonParams = extractCommonParams(req);
  const extras = await extraOrm.getAll({
    ...commonParams,
  });

  const total = extras.length === commonParams.limit ? await extraOrm.count() : extras.length;
  res.status(StatusCodes.OK);
  return res.json({ results: extras, total });
};

export const getExtra = async (req: AppRequest, res: Response): Promise<Response> => {
  const { extraOrm } = req.orms;

  const extra = await extraOrm.getById(req.pathParams.id);
  if (!extra) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  return res.status(StatusCodes.OK).send(extra);
};

export const updateExtra = async (req: AppRequest, res: Response): Promise<Response> => {
  const { extraOrm } = req.orms;

  const extra = await extraOrm.getById(req.pathParams.id);
  if (!extra) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  extra.setAttributes(req.body);
  await extra.save();
  return res.status(StatusCodes.OK).send();
};

export const deleteExtra = async (req: AppRequest, res: Response): Promise<Response> => {
  const { extraOrm } = req.orms;

  const result = await extraOrm.deleteById(req.pathParams.id);
  if (!result) {
    return res.status(StatusCodes.NOT_FOUND).send();
  }
  return res.status(StatusCodes.OK).send();
};

export const createExtra = async (req: any, res: Response): Promise<Response> => {
  const { extraOrm } = req.orms;

  const { body } = req;
  const extra = await extraOrm.create(body);
  return res.status(StatusCodes.CREATED).send({ id: extra.getDataValue('id') });
};
