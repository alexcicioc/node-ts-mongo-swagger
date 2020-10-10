import { Request } from 'express';
import { MenuOrm } from '../orms/menu';
import { CategoryOrm } from '../orms/category';
import { MenuItemOrm } from '../orms/menuItem';
import { ExtraOrm } from '../orms/extra';
import { MenuItemExtraOrm } from '../orms/menuItemExtra';

export interface AppRequest extends Request {
  orms: {
    categoryOrm: CategoryOrm;
    menuOrm: MenuOrm;
    menuItemOrm: MenuItemOrm;
    extraOrm: ExtraOrm;
    menuItemExtraOrm: MenuItemExtraOrm;
  };
  pathParams: any;
  query: {
    limit: number;
    offset: number;
    [x: string]: any;
  };
}
