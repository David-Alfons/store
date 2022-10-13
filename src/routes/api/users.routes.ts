import { Router } from 'express';
import * as controllers from '../../controllers/users.controller';

const routes = Router();

routes.route('/').post(controllers.create).get(controllers.getAllUsers);
routes
  .route('/:id')
  .get(controllers.getUserById)
  .patch(controllers.updateUserById)
  .delete(controllers.deleteUserById);

export default routes;
