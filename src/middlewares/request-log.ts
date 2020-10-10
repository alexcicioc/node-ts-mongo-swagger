import { NextFunction, Request, Response } from 'express';
import Logger from '../services/logger';

export default (req: Request, res: Response, next: NextFunction): void => {
  Logger.debug('Incoming request', {
    url: req.originalUrl,
    body: req.body,
    params: req.params,
    query: req.query,
  });
  next();
};
