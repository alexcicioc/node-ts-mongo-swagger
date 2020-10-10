import express from 'express';
import { StatusCodes } from 'http-status-codes';
import Menu from '../orms/menu';

const router = express.Router();

router.get('/', async (req, res) => {
  const menus = await Menu.find();

  res.status(StatusCodes.OK).send(menus);
});
// define the about route
router.post('/', async (req, res) => {
  const menu = new Menu(req.body);
  await menu.save();
  res.status(StatusCodes.CREATED).send({ id: menu.id });
});

export default router;
