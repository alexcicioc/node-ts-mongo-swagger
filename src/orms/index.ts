import { CategoryOrm } from './category';
import { MenuOrm } from './menu';
import { MenuItemOrm } from './menuItem';
import { ExtraOrm } from './extra';
import { MenuItemExtraOrm } from './menuItemExtra';

export default {
  categoryOrm: new CategoryOrm(),
  menuOrm: new MenuOrm(),
  menuItemOrm: new MenuItemOrm(),
  extraOrm: new ExtraOrm(),
  menuItemExtraOrm: new MenuItemExtraOrm(),
};
