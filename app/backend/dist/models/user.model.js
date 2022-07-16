"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection
                .execute('SELECT * FROM Users');
            const [rows] = result;
            return rows;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, sobrenome, data_de_nascimento, genero, cpf, rg, uf_rg, email, celular, telefone_fixo, convenio, carteirinha_do_convenio, validade } = user;
            const result = yield this.connection.execute('INSERT INTO Users (nome,sobrenome,data_de_nascimento,genero,cpf,rg,uf_rg,email,celular,telefone_fixo,convenio,carteirinha_do_convenio,validade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nome,
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
                validade]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, user);
        });
    }
}
exports.default = UserModel;
