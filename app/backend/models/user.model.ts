import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection
      .execute('SELECT * FROM Users');
    const [rows] = result;
    return rows as User[];
  }

  public async getByCpf(cpf: number): Promise<User> {
    const result = await this.connection
      .execute('SELECT * FROM Users WHERE cpf=?', [cpf]);
    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }

  public async create(user: User): Promise<User> {
    const { nome,
        sobrenome,
        data_de_nascimento,
        genero,
        cpf,
        rg,
        uf_rg,
        email,
        celular,
        telefone_fixo,
        convenio,
        carteirinha_do_convenio,
        validade } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (nome,sobrenome,data_de_nascimento,genero,cpf,rg,uf_rg,email,celular,telefone_fixo,convenio,carteirinha_do_convenio,validade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nome,
        sobrenome,
        data_de_nascimento,
        genero,
        cpf,
        rg,
        uf_rg,
        email,
        celular,
        telefone_fixo,
        convenio,
        carteirinha_do_convenio,
        validade],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}
