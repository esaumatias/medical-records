import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/User.interface';
import { NotFoundError } from 'restify-errors';

class UsersService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getByCpf(cpf: number): Promise<User> {
    const user = await this.model.getByCpf(cpf);
    return user;
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }

  public async update(id: number, user: User): Promise<void> {
    return this.model.update(id, user);
  }
}

export default UsersService;
