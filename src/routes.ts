import express from 'express';
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from './controllers/categories';
import { injectOrms } from './middlewares/orm-inject';
import { createMenu, deleteMenu, getMenu, getMenus, updateMenu } from './controllers/menus';
import {
  createMenuItem,
  deleteMenuItem,
  getMenuItems,
  updateMenuItem,
} from './controllers/menu-items';
import { createExtra, deleteExtra, getExtra, getExtras, updateExtra } from './controllers/extras';
import { assignExtra } from './controllers/menu-item-extras';

const router = express.Router();
router.use(injectOrms);

router.get('/categories/', getCategories);
router.get('/categories/:id', getCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);
router.post('/categories', createCategory);

router.get('/extras/', getExtras);
router.get('/extras/:id', getExtra);
router.put('/extras/:id', updateExtra);
router.delete('/extras/:id', deleteExtra);
router.post('/extras', createExtra);

router.get('/menus', getMenus);
router.get('/menus/:id', getMenu);
router.put('/menus/:id', updateMenu);
router.delete('/menus/:id', deleteMenu);
router.post('/menus', createMenu);

router.get('/menus/:id/items', getMenuItems);
router.put('/menu-items/:id', updateMenuItem);
router.delete('/menu-items/:id', deleteMenuItem);
router.post('/menus/:id/items', createMenuItem);

router.post('/menus-items/:id/extras', assignExtra);

export default router;
