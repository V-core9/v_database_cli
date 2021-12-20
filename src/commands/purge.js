const {Command, flags} = require('@oclif/command');

const v_db = require("v_database");

class PurgeCommand extends Command {
  async run() {
    const {flags} = this.parse(PurgeCommand);

    console.log(await v_db.helpers.purge_database());
  }
}

PurgeCommand.description = `Describe the command here
...
Extra documentation goes here
`;

PurgeCommand.flags = {
  //force: flags.string({char: 'f', description: 'just to force it'}),
};

module.exports = PurgeCommand;
