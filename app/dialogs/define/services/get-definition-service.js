/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
const { EntityRecognizer } = require("botbuilder");

/* --------------------------------- CUSTOM --------------------------------- */
const wordDefApi = require("./../../api/word-def/word-def-api.js");

/* -------------------------------------------------------------------------- */
/*                             SERVICE DEFINITION                             */
/* -------------------------------------------------------------------------- */
const getDefintion = (session, args) => {
  const term = EntityRecognizer.findEntity(args.entities, "term");

  if (!term) {
    session.send("Sorry! I couldn't find anything about that.");
    session.beginDialog("/segue");
    return;
  }

  session.sendTyping();
  wordDefApi(term.entity)
    .then(
      (definition) => session.send(definition),
      ({ message }) => session.send(message)
    )
    .then(() => session.beginDialog("/segue"));
};

module.exports = getDefintion;
