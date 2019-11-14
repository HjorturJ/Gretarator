const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const nicknameService = require('./services/nicknameService');

app.use(bodyParser.json());

//http://localhost:3000/api/nicknames [GET]
app.get('/api/nicknames', async function(req, res) {
    const result = await nicknameService.getAllNicks();
    return res.status(result.status).json(result.body);
});

//http://localhost:3000/api/nicknames/random [GET]
app.get('/api/nicknames/random', async function(req, res) {
    const result = await nicknameService.getRandomNick();
    return res.status(result.status).json(result.body);
});

//http://localhost:3000/api/nicknames/:nick [GET]
app.get('/api/nicknames/:nick', async function(req, res) {
    const nick = req.params.nick;
    const result = await nicknameService.getNickByName(nick);
    return res.status(result.status).json(result.body);
});

//http://localhost:3000/api/nicknames [POST]
app.post('/api/nicknames', async function(req, res) {
    const result = await nicknameService.createNick(req.body);
    return res.status(result.status).json(result.body);
});

//http://localhost:3000
app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});