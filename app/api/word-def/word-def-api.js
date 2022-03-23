/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
const { getDef } = require("word-definition");

/* -------------------------------------------------------------------------- */
/*                               API DEFINITION                               */
/* -------------------------------------------------------------------------- */
const wordDef = (term) =>
  new Promise((resolve, reject) =>
    getDef(term, "en", { exact: false }, ({ definition, err }) =>
      !err
        ? resolve(definition)
        : reject({ message: `Sorry! I didn't find anything about ${term}.` })
    )
  );

module.exports = wordDef;
