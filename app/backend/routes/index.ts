import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import validationUser from '../middlewares/users.middleware';

const router = Router();

const usersController = new UsersController();

router.get('/users', usersController.getAll);
router.get('/users/:cpf', usersController.getByCpf);
router.post('/users', validationUser, usersController.create);

export default router;
