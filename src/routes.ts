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

const router = express.Router();
router.use(injectOrms);

router.get('/categories/', getCategories);
router.get('/categories/:id', getCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);
router.post('/categories', createCategory);

router.get('/menus', getMenus);
router.get('/menus/:id', getMenu);
router.put('/menus/:id', updateMenu);
router.delete('/menus/:id', deleteMenu);
router.post('/menus', createMenu);

export default router;
