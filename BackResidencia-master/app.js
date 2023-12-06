const express = require('express');
const app = express();
// const { v4: uuidv4 } = require('uuid');
const conexao = require('./dataBase/sequelize.js')
const Usuario = require('./models/usuario.js')
const Missoes = require('./models/missoes.js')
const controller = require("./Controller/Missao/missaoController.js")
const usuarioController = require("./Controller/Usuario/usuarioController.js")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      return res.status(200).json({});
    }
    next();
});

app.use(express.json());

conexao
.authenticate()
.then(() => {
    console.log('Conectado ao banco de dados!');
    // Sincronizando os modelos com o banco de dados
    return conexao.sync();
})
.then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
})
.catch((error) => {
    console.log('Erro de conexão:', error);
});

app.use("/", controller ,usuarioController);


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Servidor em execução na porta http://localhost:${port}/`);
});
