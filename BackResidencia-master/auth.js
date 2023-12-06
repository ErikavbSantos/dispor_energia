const express = require('express');
const Joi = require('joi');
const app = express();
const router = express.Router();

const tiposDeUsuario = {
  admin: 'admin',
  cliente: 'cliente',
  negociador: 'negociador'
};

// Middleware para verificar se o usuário é um administrador.
function isAdmin(req, res, next) {
  if (req.user && req.user.tipoUsuario === tiposDeUsuario.admin) {
    next();
  } else {
    res.status(403).json({ message: 'Sou administrador.' });
  }
}

// Middleware para verificar se o usuário é um cliente.
function isCliente(req, res, next) {
  if (req.user && req.user.tipoUsuario === tiposDeUsuario.cliente) {
    next();
  } else {
    res.status(403).json({ message: 'Sou cliente.' });
  }
}

// Middleware para verificar se o usuário é um negociador.
function isNegociador(req, res, next) {
  if (req.user && req.user.tipoUsuario === tiposDeUsuario.negociador) {
    next();
  } else {
    res.status(403).json({ message: 'Sou negociador.' });
  }
}

// Rota para administradores.
app.get('/admin', isAdmin, (req, res) => {
  res.send('Página do administrador');
});

// Rota para clientes.
app.get('/cliente', isCliente, (req, res) => {
  res.send('Página do cliente');
});

// Rota para negociadores.
app.get('/negociador', isNegociador, (req, res) => {
  res.send('Página do negociador');
});

// Rota para a página "home" acessível por todos.
app.get('/home', (req, res) => {
  res.send('Home');
});