import { NextFunction, Response } from 'express';
import Logger from '../services/logger';
import { AppRequest } from '../types/request';

export default (req: AppRequest, res: Response, next: NextFunction): void => {
  Logger.debug('Incoming request', {
    url: req.originalUrl,
    body: req.body,
    params: req.params,
    pathParams: req.pathParams,
    query: req.query,
  });
  next();
};
