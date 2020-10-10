import { Request } from 'express';

const isNullOrUndefined = (value: any): boolean => {
  return value === undefined || value === null;
};

interface CommonParams {
  limit?: number;
  offset?: number;
}

export const extractCommonParams = (req: Request): CommonParams => {
  const { limit, offset } = req.query;
  const commonParams: CommonParams = {};
  if (!isNullOrUndefined(limit)) {
    commonParams.limit = parseInt(req.query.limit as string, 10);
  }

  if (!isNullOrUndefined(offset)) {
    commonParams.offset = parseInt(req.query.offset as string, 10);
  }
  return commonParams;
};
