const mongoose = require('mongoose');
const nickSchema = require('../schemas/nick');
let info;
try {
    info = require('../info.js');
} catch(error) {
    console.log('Info file could not be found! - This most likely means you are working in a production evironment!');
}
let devUsername;
let devPassword;

if(info) {
    devUsername = info.username;
    devPassword = info.password;
}

const user = process.env.DBUSR || devUsername;
const pass = process.env.DBPW || devPassword;

const connection = mongoose.createConnection(`mongodb+srv://${user}:${pass}@gretarnator-ggxg8.mongodb.net/GretarnatorAPI?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    Nickname: connection.model('Nicknames', nickSchema)
};