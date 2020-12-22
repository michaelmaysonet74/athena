const { getDef } = require('word-definition');

const wordDef = (term) => {
    return new Promise((resolve, reject) => {
        getDef(term, 'en', { exact: false }, (response) => {
            const { definition, err } = response;

            if (typeof err !== 'undefined') {
                return reject(`Sorry! I didn't find anything about ${term}.`);
            }
            else {
                return resolve(definition);
            }
        });
    });
}

module.exports = wordDef;
