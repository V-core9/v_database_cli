const { Command, } = require('@oclif/command');
const v_db = require("v_database");

class PurgeCommand extends Command {
  async run() {
    console.log(await v_db.purge());
  }
}

PurgeCommand.description = `Describe the command here
...
Extra documentation goes here
`;

module.exports = PurgeCommand;
