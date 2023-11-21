const { DataTypes } = require("sequelize");
const sequelize = new Sequelize(" ");


const Missoes = sequelize.define('Missoes', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    frequenciaReativacao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    nomeMissao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    dataCriacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    tempoExecucao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dado: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    preRequisito: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    orientacao: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    rascunho: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
});
  
