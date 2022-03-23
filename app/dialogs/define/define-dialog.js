/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
const { IntentDialog } = require("botbuilder");
const { WitRecognizer } = require("botbuilder-wit");

/* --------------------------------- CUSTOM --------------------------------- */
const getDefinition = require("./services/get-oxford-def-service.js");

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */
const recognizer = new WitRecognizer(process.env.WIT_TOKEN);

/* -------------------------------------------------------------------------- */
/*                              DIALOG DEFINITION                             */
/* -------------------------------------------------------------------------- */
const define = new IntentDialog({
  recognizers: [recognizer],
});

/* -------------------------------------------------------------------------- */
/*                               DIALOG HANDLERS                              */
/* -------------------------------------------------------------------------- */
define.onBegin((session, args = { segue: false }) => {
  const { isNewUser } = session.userData;
  const { segue } = args;

  if (!segue && isNewUser) {
    session.send(`Just ask me the defintion of any word and I might have an answer.
      Don't be shy, feel free to type casual.`);
  } else if (segue) {
    session.send(`Okay, ask me. I'm here to help!`);
  }
});

define.matches("getDefinition", (session, args) =>
  getDefinition(session, args)
);

define.onDefault((session, args) => getDefinition(session, args));

module.exports = define;
