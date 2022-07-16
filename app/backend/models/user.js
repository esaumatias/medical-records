const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    data_de_nascimento: DataTypes.STRING,
    genero: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    rg: DataTypes.INTEGER,
    uf_rg: DataTypes.STRING,
    email: DataTypes.STRING,
    celular: DataTypes.INTEGER,
    telefone_fixo: DataTypes.INTEGER,
    convenio: DataTypes.STRING,
    carteirinha_do_convenio: DataTypes.STRING,
    validade: DataTypes.STRING
  });

  return User;
};

module.exports = User;
