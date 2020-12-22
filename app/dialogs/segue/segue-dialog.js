const { Prompts } = require('botbuilder');

const segue = [
    (session) => Prompts.confirm(session, 'Can I do anything else for you?'),
    (session, results) => session.beginDialog(
        results.response ? '/define' : '/goodbye',
        { segue: true }
    ),
];

module.exports = segue;
