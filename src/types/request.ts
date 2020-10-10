import { Request } from 'express';
import { MenuOrm } from '../orms/menu';
import { CategoryOrm } from '../orms/category';

export interface AppRequest extends Request {
  orms: {
    categoryOrm: CategoryOrm;
    menuOrm: MenuOrm;
  };
  pathParams: any;
  query: {
    limit: number;
    offset: number;
    [x: string]: any;
  };
}
