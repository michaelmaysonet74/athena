const request = require('request');
const { capitilize } = require('../../utils/index.js');

const oxfordDefApi = (term) => {
    const encodedTerm = encodeURIComponent(term.toLowerCase());
    const URL = `https://od-api.oxforddictionaries.com:443/api/v1/entries/en/${encodedTerm}/definitions`;

    return new Promise((resolve, reject) => {
        request.get({
            url: URL,
            headers: {
                'app_id': process.env.OXFORD_ID,
                'app_key': process.env.OXFORD_KEY
            }
        }, (err, _, body) => {
            if (typeof err !== 'undefined' && err !== null) {
                return reject(err);
            }

            try {
                const parsedBody = JSON.parse(body);
                if (typeof parsedBody.results[0] !== 'undefined') {

                    const results = parsedBody.results[0];
                    const entries = results.lexicalEntries[0].entries[0];
                    const defintion = entries.senses[0].definitions[0];

                    return resolve(capitilize(defintion));
                }
            }
            catch (e) {
                return reject({
                    message: 'Definition not found!'
                });
            }
        });
    });
};

module.exports = oxfordDefApi;
