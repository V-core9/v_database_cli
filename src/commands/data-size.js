const { Command } = require('@oclif/command');
const vDb = require('v_database');
class DataSizeCommand extends Command {
  async run() {
    console.log(
      await vDb.helpers.data_size()
    );
  }
}
DataSizeCommand.description = `Describe the command here
...
Extra documentation goes here`;
module.exports = DataSizeCommand;
