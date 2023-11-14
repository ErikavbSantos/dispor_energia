const express = require('express');
const app = express();
app.use(express.json());

const missions = []; // Armazenamento em memória para as missões

// Rota para criar uma nova missão
app.post('/missions', (req, res) => { 
    const { title, description } = req.body;
    const newMission = { id: Date.now(), title, description };
    missions.push(newMission);
    res.status(201).json(newMission);
});

// Rota para listar todas as missões
app.get('/listmissions', (req, res) => {
    const title = "Title teste";
    const description = "Description teste"
    const newMission = { id: Date.now(), title, description };
    missions.push(newMission);
    res.status(201).json(newMission);
});

// Rota para obter uma missão pelo ID
app.get('/missions/:id', (req, res) => {
    const missionId = parseInt(req.params.id);
    const mission = missions.find((m) => m.id === missionId);
    if (!mission) {
        return res.status(404).json({ message: 'Missão não encontrada' });
    }
    res.json(mission);
});

// Rota para atualizar uma missão pelo ID
app.put('/attmissions/:id', (req, res) => {
    const missionId = parseInt(req.params.id);
    const { title, description } = req.body;
    const mission = missions.find((m) => m.id === missionId);
    if (!mission) {
        return res.status(404).json({ message: 'Missão não encontrada' });
    }
    mission.title = title;
    mission.description = description;
    res.json(mission);
});

// Rota para excluir uma missão pelo ID
app.delete('/deletemissions/:id', (req, res) => {
    const missionId = parseInt(req.params.id);
    const index = missions.findIndex((m) => m.id === missionId);
    if (index === -1) {
        return res.status(404).json({ message: 'Missão não encontrada' });
    }
    missions.splice(index, 1);
    res.json({ message: 'Missão excluída com sucesso' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
