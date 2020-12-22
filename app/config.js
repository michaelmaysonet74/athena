const builder = require('botbuilder');

const connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID || null,
    appPassword: process.env.MICROSOFT_APP_PASSWORD || null
});

module.exports = {
    connector,
};
