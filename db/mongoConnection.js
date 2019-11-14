const mongoose = require('mongoose');
const nickSchema = require('../schemas/nick');
const pass = process.env.DBPW;
const user = process.env.DBUSR;

const connection = mongoose.createConnection(`mongodb+srv://${user}:${pass}@gretarnator-ggxg8.mongodb.net/GretarnatorAPI?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Nickname: connection.model('Nicknames', nickSchema)
};