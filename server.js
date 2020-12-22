const express = require('express');
const PORT = process.env.PORT || 3978;

const bot = require('./app/bot.js');
const { connector } = require('./app/config.js');
const server = express();

server.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}...`);
});

server.post('/api/messages', connector.listen());
