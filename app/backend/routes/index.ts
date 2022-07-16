import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();

const usersController = new UsersController();

router.get('/users', usersController.getAll);
router.get('/users/:cpf', usersController.getByCpf);

export default router;
