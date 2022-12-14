import { Router } from 'express';
import OrdersController from '../controllers/ordersControllers';
import ProductControllers from '../controllers/productControllers';
import UserControllers from '../controllers/userControllers';
import ProductValidations from '../middleware/productValidations';
import UserValidations from '../middleware/userValidations';

const routes: Router = Router();

routes.get('/products', ProductControllers.getAll);
routes.post(
  '/products',
  ProductValidations.validateName,
  ProductValidations.validateAmount,
  ProductControllers.create,
);

routes.post(
  '/users',
  UserValidations.validateName,
  UserValidations.validateClass,
  UserValidations.validateLevel,
  UserValidations.validatePassword,
  UserControllers.create,
);

routes.get('/orders', OrdersController.getAll);

export default routes;