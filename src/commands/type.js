const {Command, flags} = require('@oclif/command');

const v_db = require('v_database');

class TypeCommand extends Command {
  async run() {
    const {flags} = this.parse(TypeCommand);
    const name = flags.name || 'world';
    this.log(`hello ${name} from C:\\Users\\v__V_\\V-core9\\v_database_cli\\src\\commands\\type.js`);

    console.log(await v_db.type.view());
  }
}

TypeCommand.description = `Describe the command here
...
Extra documentation goes here
`;

TypeCommand.flags = {
  view: flags.string({char: 'v', description: 'id to print / view'}),
};

module.exports = TypeCommand;
