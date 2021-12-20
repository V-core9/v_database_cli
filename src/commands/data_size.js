const {Command, flags} = require('@oclif/command');

const v_db = require("v_database");

class DataSizeCommand extends Command {
  async run() {
    const {flags} = this.parse(DataSizeCommand);

    console.log(await v_db.helpers.data_size());
  }
}

DataSizeCommand.description = `Describe the command here
...
Extra documentation goes here
`;

DataSizeCommand.flags = {
  //force: flags.string({char: 'f', description: 'just to force it'}),
};

module.exports = DataSizeCommand;
