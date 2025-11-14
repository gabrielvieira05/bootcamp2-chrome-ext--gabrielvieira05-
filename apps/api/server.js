const express = require('express');
const cors = require('cors');
const app = express();

// Permite que o Frontend (PWA) converse com o Backend
app.use(cors());
app.use(express.json());

let sessions = [];

// Rota de teste
app.get('/', (req, res) => {
    res.json({ message: 'FocusTimer API está online! 🚀' });
});

// Rota para salvar uma sessão de foco
app.post('/sessions', (req, res) => {
    const { duration, date } = req.body;
    const newSession = {
        id: Date.now(),
        duration,
        date: date || new Date().toISOString()
    };
    sessions.push(newSession);
    console.log('Nova sessão registrada:', newSession);
    res.status(201).json(newSession);
});

// Rota para listar histórico
app.get('/sessions', (req, res) => {
    res.json(sessions);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));