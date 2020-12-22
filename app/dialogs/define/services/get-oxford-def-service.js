const oxfordDefApi = require('../../../api/oxford/oxford-definitions-api.js');

const getOxfordDef = (session, args) => {
    const term = args.entities.reduce(
        (term, { entity, type }) => type === 'term' ? `${term} ${entity.entity}` : term,
        ''
    );

    if (typeof term !== 'undefined') {
        session.sendTyping();

        oxfordDefApi(term.trim())
            .then(
                (definition) => session.send(definition),
                (error) => session.send(error.message)
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

module.exports = getOxfordDef;
