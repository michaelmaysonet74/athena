const { EntityRecognizer } = require('botbuilder');
const wordDefApi = require('./../../api/word-def/word-def-api.js');

const getDefintion = (session, args) => {
    const term = EntityRecognizer.findEntity(args.entities, 'term');

    if (typeof term !== 'undefined') {
        session.sendTyping();

        wordDefApi(term.entity)
            .then(
                (definition) => session.send(definition),
                (error) => session.send(error)
            )
            .then(
                () => session.beginDialog('/segue')
            );
    }
    else {
        session.send(`Sorry! I didn't find anything about that.
				But in the near future I will definitely have an answer,
                because thanks to you, I'm constantly learning.`);
        session.beginDialog('/segue');
    }
};

module.exports = getDefintion;
