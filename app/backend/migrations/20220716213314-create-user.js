'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      sobrenome: {
        type: Sequelize.STRING
      },
      data_de_nascimento: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      rg: {
        type: Sequelize.INTEGER
      },
      uf_rg: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      celular: {
        type: Sequelize.INTEGER
      },
      telefone_fixo: {
        type: Sequelize.INTEGER
      },
      convenio: {
        type: Sequelize.STRING
      },
      carteirinha_do_convenio: {
        type: Sequelize.STRING
      },
      validade: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};