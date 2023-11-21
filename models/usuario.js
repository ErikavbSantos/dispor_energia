const { DataTypes } = require("sequelize");
const sequelize = new Sequelize(" ");


const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
        type:DataTypes.STRING(60),
        allowNull: false,
        unique: true,
    },
    CPF: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    pontuacao: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    tipoUsuario: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
});

