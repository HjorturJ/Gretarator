const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const nicknameService = require('./services/nicknameService');
const path = require('path');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//HTML random nickname site
app.get('/', async function(req, res) {
    return res.sendFile(path.join(__dirname+'/index.html'));
});

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

//http://localhost:3000/api/nicknames/:nick [PUT]
app.put('/api/nicknames/:nick', async function(req, res) {
    //Parameters in the URL are in UTF-8 unicode format that we need to decode.
    const nick = decodeURIComponent(escape(req.params.nick));
    const nickInput = req.body;
    const result = await nicknameService.updateNickByName(nick, nickInput);
    return res.status(result.status).json(result.body);
});

//http://localhost:3000/api/nicknames/:nick [DELETE]
app.delete('/api/nicknames/:nick', async function(req, res) {
    const nick = req.params.nick;
    const result = await nicknameService.deleteNickByName(nick);
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