/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- CUSTOM --------------------------------- */
const oxfordDefApi = require("../../../api/oxford/oxford-definitions-api.js");

/* -------------------------------------------------------------------------- */
/*                             SERVICE DEFINITION                             */
/* -------------------------------------------------------------------------- */
const getOxfordDef = (session, args) => {
  const term = args.entities.reduce(
    (term, { entity, type }) =>
      type === "term" ? `${term} ${entity.entity}` : term,
    ""
  );

  if (!term) {
    session.send("Sorry! I couldn't find anything about that.");
    session.beginDialog("/segue");
    return;
  }

  session.sendTyping();
  oxfordDefApi(term.trim())
    .then(
      (definition) => session.send(definition),
      ({ message }) => session.send(message)
    )
    .then(() => session.beginDialog("/segue"));
};

module.exports = getOxfordDef;
