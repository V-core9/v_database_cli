const { Command, flags } = require('@oclif/command');

const v_db = require('v_database');

class InstallCommand extends Command {
  async run() {
    const { flags } = this.parse(InstallCommand);
    const name = flags.name || 'world';
    this.log(`hello ${name} from C:\\Users\\v__V_\\V-core9\\v_database_cli\\src\\commands\\install.js`);

    console.log(await v_db.install());
  }
}

InstallCommand.description = `Trigger v_database.install() process
...
Sets up the database dir and config file.
`;

InstallCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
};

module.exports = InstallCommand;
