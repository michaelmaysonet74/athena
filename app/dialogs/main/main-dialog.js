const { IntentDialog, Prompts } = require("botbuilder");

const main = new IntentDialog();
const GREETING = new RegExp("^Hello|Hi|Hey|Hola", "i");

main.matches(GREETING, [
  (session, _, next) => {
    const { name } = session.userData;

    if (typeof name !== "undefined") {
      session.userData.isNewUser = false;
      next();
    } else {
      session.userData.isNewUser = true;
      Prompts.text(session, `What's your name?`);
    }
  },
  (session, results) => {
    const { response } = results;
    const { name } = session.userData;

    if (typeof name !== "undefined") {
      session.send(`Welcome back ${name}! How can I help you?`);
      session.beginDialog("/define");
    } else {
      session.userData.name = response;
      session.beginDialog("/presentation");
    }
  },
]);

main.onDefault((session) => {
  session.send(`Sorry! I don't quite get what you mean by that.`);
});

module.exports = main;
