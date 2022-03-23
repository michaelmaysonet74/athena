/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
const { Prompts } = require("botbuilder");

/* -------------------------------------------------------------------------- */
/*                               DIALOG HANDLERS                              */
/* -------------------------------------------------------------------------- */
const goodbye = [
  (session, _, next) => {
    const { isNewUser } = session.userData;
    isNewUser
      ? Prompts.confirm(session, "Do you want me to remember your name?")
      : next();
  },
  (session, results) => {
    if (typeof results !== "undefined" && !results.response) {
      session.userData = {};
    }
    session.endConversation(`Okay, I'm glad to be useful. Bye!`);
  },
];

module.exports = goodbye;
