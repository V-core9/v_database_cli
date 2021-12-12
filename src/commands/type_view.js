const {Command, flags} = require('@oclif/command');

const v_db = require('v_database');

class TypeViewCommand extends Command {
  async run() {
    const {flags} = this.parse(TypeViewCommand);
    const id = flags.id || 'world';
    //this.log(`hello ${id} from C:\\Users\\v__V_\\V-core9\\v_database_cli\\src\\commands\\type_view.js`);

    console.log(await v_db.type.view());
  }
}

TypeViewCommand.description = `Describe the command here
...
Extra documentation goes here
`;

TypeViewCommand.flags = {
  id: flags.string({char: 'i', description: 'type to list'}),
};

module.exports = TypeViewCommand;
