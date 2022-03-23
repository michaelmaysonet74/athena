/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
const { UniversalBot } = require("botbuilder");
const { connector } = require("./config.js");

/* --------------------------------- DIALOGS -------------------------------- */
const mainDialog = require("./dialogs/main/main-dialog.js");
const presentationDialog = require("./dialogs/presentation/presentation-dialog.js");
const defineDialog = require("./dialogs/define/define-dialog.js");
const segueDialog = require("./dialogs/segue/segue-dialog.js");
const goodbyeDialog = require("./dialogs/goodbye/goodbye-dialog.js");

/* -------------------------------------------------------------------------- */
/*                               BOT DEFINITION                               */
/* -------------------------------------------------------------------------- */
const bot = new UniversalBot(connector);

bot.dialog("/", mainDialog);
bot.dialog("/presentation", presentationDialog);
bot.dialog("/define", defineDialog);
bot.dialog("/segue", segueDialog);
bot.dialog("/goodbye", goodbyeDialog);

module.exports = bot;
