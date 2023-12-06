const express = require("express");
const app = express();
// const pool = require('../../dataBase/connection');
const Missoes = require('../../models/missoes.js');
const Usuario = require('../../models/usuario.js')

// app.post('/missao', async (req, res) => {
//     const { usuario_id, dadosMissao } = req.body;

//     try {
//         // Verifica se o usuário existe antes de associar a missão a ele
//         const usuario = await Usuario.findByPk(usuario_id);
//         if (!usuario) {
//             return res.status(404).json({ message: 'Usuário não encontrado' });
//         }

//         // Adiciona o ID do usuário aos dados da missão
//         dadosMissao.usuario_id = usuario_id;

//         // Cria a nova missão associada ao usuário
//         const novaMissao = await Missoes.create(dadosMissao);

//         res.status(201).json(novaMissao);
//     } catch (error) {
//         console.error('Erro ao criar missão associada ao usuário:', error);
//         res.status(500).send('Erro interno do servidor');
//     }
// });

app.post('/missao/:usuarioId', async (req, res) => {
    const { usuarioId } = req.params;
    const dadosMissao = req.body;

    console.log(JSON.stringify(dadosMissao, null, 2));
    const dataAtual = new Date().toISOString();
    const dataFormatada = dataAtual.split('T')[0];
    dadosMissao.data_criacao = dataFormatada;

    try {
        // Verifica se o usuário existe antes de associar a missão a ele
        const usuario = await Usuario.findByPk(usuarioId);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Adiciona o ID do usuário aos dados da missão
        dadosMissao.usuario_id = usuarioId;

        // Cria a nova missão associada ao usuário
        const novaMissao = await Missoes.create(dadosMissao);


        
        res.status(201).json(novaMissao);
    } catch (error) {
        console.error('Erro ao criar missão associada ao usuário:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

app.get('/listaMissao', async (req, res) => {
    try {
        const rows = await Missoes.findAll();

        res.json(rows);
    } catch (error) {
        console.error('Erro ao recuperar dados do banco de dados:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota para obter uma missão pelo ID
app.get('/missao/:id', async (req, res) => {
    try {
        const missionId = parseInt(req.params.id);
        const rows = await Missoes.findByPk(missionId)

        res.json(rows)
    } catch (error) {
        console.error('Erro ao recuperar dados do banco de dados:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota para atualizar uma missão pelo ID
app.put('/missao/:id', async (req, res) => {
    try {
        const missaoId = parseInt(req.params.id);
        const dadosAtualizarMissoes = req.body;
        const dataAtual = new Date().toISOString();
        const dataFormatada = dataAtual.split('T')[0];
        dadosAtualizarMissoes.data = dataFormatada;

        const porra = await Missoes.update(dadosAtualizarMissoes, {
            where: {
                id: missaoId
            }
        });

        res.status(200).send('Atualizado');
        console.log("teste")
        console.log(porra)
    } catch (error) {
        console.error('Erro ao atualizar no banco de dados:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

// Rota para excluir uma missão pelo ID
app.delete('/missao/:id', async (req, res) => {
    try {
        const missaoId = parseInt(req.params.id);

        await Missoes.destroy({
            where: {
                id: missaoId
            }
        });
        
        res.status(200).send('Missao Deletada')
    } catch (error) {
        console.error('Erro ao atualizar no banco de dados:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = app;