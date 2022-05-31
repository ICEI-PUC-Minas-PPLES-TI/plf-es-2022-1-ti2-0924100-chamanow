const db = require('./db');
const Sequelize = require('sequelize');
const { get } = require('../routes/admin');

const Cadastro = db.define('usuarios', {
    COD_USUARIO: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    REGIAO_ATUACAO: {
        type: Sequelize.STRING,
        default: null,
        get() {
            const regiao_atuacao = this.getDataValue('REGIAO_ATUACAO');
            return regiao_atuacao ? regiao_atuacao : null
        },
        set(value) {
            this.setDataValue('REGIAO_ATUACAO', hash(value));
        }
    },
    EMAIL: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
        get() {
            const email = this.getDataValue('EMAIL');
            return email
        },
        set(value) {
            this.getDataValue('EMAIL', hash(value));
        }
    },
    SENHA: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
        validate: {
            len: [8, 50]
        },
        get() {
            const senha = this.getDataValue('SENHA');
            return senha
        },
        set(value) {
            this.getDataValue('SENHA', hash(value));
        }
    },
    NOME: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true,
        get() {
            const nome = this.getDataValue('NOME');
            return nome
        },
        set(value) {
            this.getDataValue('NOME', hash(value));
        }
    },
    CPF: {
        type: Sequelize.STRING,
        default: null,
        get() {
            const cpf = this.getDataValue('CPF');
            return cpf ? cpf : null
        },
        set(value) {
            this.getDataValue('CPF', hash(value));
        }
    },
    CNPJ: {
        type: Sequelize.STRING,
        default: null,
        get() {
            const cnpj = this.getDataValue('CNPJ');
            return cnpj ? cnpj : null
        },
        set(value) {
            this.getDataValue('CNPJ', hash(value));
        }
    },
    DATA_NASC: {
        type: Sequelize.DATE,
        default: null,
        get() {
            const data_nasc = this.getDataValue('DATA_NASC');
            return data_nasc ? data_nasc : null
        },
        set(value) {
            this.getDataValue('DATA_NASC', hash(value));
        }
    },
    FOTO_PERFIL: {
        type: Sequelize.BLOB,
        default: null,
        get() {
            const ft_perfil = this.getDataValue('FOTO_PERFIL');
            return ft_perfil ? ft_perfil : null
        },
        set(value) {
            this.getDataValue('FOTO_PERFIL', hash(value));
        }
    },
    DATA_CRIACAO: {
        type: Sequelize.DATE,
        allowNull: false,
        default: Date.now()
    },
    COD_ENDERECO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    COD_TIPO: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    }
});

//Cadastro.sync({ alter: true });

module.exports = Cadastro;