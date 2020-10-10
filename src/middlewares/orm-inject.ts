import { NextFunction, Response } from 'express';
import orms from '../orms';
import { AppRequest } from '../types/request';

export const injectOrms = (req: AppRequest, res: Response, next: NextFunction): void => {
  req.orms = orms;
  next();
};
