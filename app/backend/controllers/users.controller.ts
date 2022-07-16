import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/users.service';

class UsersController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  };

  public getByCpf = async (req: Request, res: Response) => {
    const cpf = parseInt(req.params.cpf);
    const user = await this.userService.getByCpf(cpf);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'CPF não cadastrado!'});
    }

    res.status(StatusCodes.OK).json(user);
  }
}

export default UsersController;
