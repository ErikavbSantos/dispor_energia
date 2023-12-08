const { DataTypes } = require('sequelize');
const sequelize = require('../dataBase/sequelize');

const Usuario = sequelize.define("Usuario", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tipo_usuario: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, 


{
    tableName: 'usuario',
    timestamps:false 
});

module.exports = Usuario;