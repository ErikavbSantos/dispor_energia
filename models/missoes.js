const { DataTypes } = require('sequelize');
const sequelize = require('../dataBase/sequelize');
const Usuario = require("./usuario")

const Missoes = sequelize.define('missoes', {
  // Defina os atributos do modelo aqui
    data_criacao: {
        type: DataTypes.STRING,
        allowNull: false,
},
    progresso: {
        type: DataTypes.STRING,
        allowNull: false,
},
    frequencia_reativacao: {
        type: DataTypes.STRING,
        allowNull: false,
},
    nome_missao: {
        type: DataTypes.STRING,
        allowNull: false,
},
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
},
    img: {
        type: DataTypes.BLOB('medium'),
        allowNull: false,
},
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
},
    tempo_execucao: {
        type: DataTypes.DATE,
        allowNull: false,
},
    dado: {
        type: DataTypes.STRING,
        allowNull: false,
},
    pre_requisito: {
        type: DataTypes.STRING,
        allowNull: false,
},
    orientacao1: {
        type: DataTypes.STRING,
        allowNull: false,
},
    orientacao2: {
        type: DataTypes.STRING,
        allowNull: false,
},
    orientacao3: {
        type: DataTypes.STRING,
        allowNull: false,
},
    orientacao4: {
        type: DataTypes.STRING,
        allowNull: false,
},
    rascunho: {
        type: DataTypes.TINYINT,
        allowNull: false,
},
    progresso_avaliacao: {
        type: DataTypes.STRING,
        allowNull: false,
},
},

{
    tableName: 'missoes',
    timestamps: false
});

Missoes.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = Missoes;