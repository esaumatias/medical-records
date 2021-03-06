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

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const cpf = parseInt(req.params.cpf);
    const userCpf = await this.userService.getByCpf(cpf);
    const userCreated = await this.userService.create(user);

    if (userCpf) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'CPF ja está cadastrado!'});
    }

    res.status(StatusCodes.CREATED).json(userCreated);
  }

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = req.body;
    const userUpdate = await this.userService.update(id, user);
    const cpf = parseInt(req.params.cpf);
    const userCpf = await this.userService.getByCpf(cpf);
    

    if (!userCpf) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'CPF não está cadastrado!'});
    }

    res.status(StatusCodes.CREATED).json(userUpdate);
  };
}

export default UsersController;
