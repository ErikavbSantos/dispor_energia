const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('./models/usuario');

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
    try {
        // Encontre o usuário pelo e-mail
        const usuario = await Usuario.findOne({
            where: {
                email: req.body.email,
            },
        });

        // Verifique se o usuário foi encontrado
        if (!usuario) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Compare a senha fornecida com o hash armazenado
        const senhaCorrespondente = await bcrypt.compare(req.body.senha, usuario.senha);

        // Verifique se a senha corresponde
        if (!senhaCorrespondente) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        res.status(200).json({ message: 'Login bem-sucedido' });
    } catch (error) {
        console.error('Erro ao autenticar o usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

exports.authRouter = authRouter;