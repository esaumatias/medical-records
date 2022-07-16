interface User {
    id?: number;
    nome: string;
    sobrenome: string;
    data_de_nascimento: string;
    genero: string;
    cpf: number;
    rg: number;
    uf_rg: string;
    email: string;
    celular: number;
    telefone_fixo: number;
    convenio: string;
    carteirinha_do_convenio: string;
    validade: string;
  }
  
  export default User;
