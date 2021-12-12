const {Command, flags} = require('@oclif/command');

const v_db = require('v_database');

class TypeNewCommand extends Command {
  async run() {
    const {flags} = this.parse(TypeNewCommand);
    const name = flags.name || null;
    //this.log(`hello ${name} from C:\\Users\\v__V_\\V-core9\\v_database_cli\\src\\commands\\type_new.js`);
    if (name  === null) {
      console.log('no type name provided');
      return false;
    } else {
      const resp = await v_db.type.new(name);
      console.log(resp);
      return resp;
    }
  }
}

TypeNewCommand.description = `Describe the command here
...
Extra documentation goes here
`;

TypeNewCommand.flags = {
  name: flags.string({char: 'n', description: 'type name to create'}),
};

module.exports = TypeNewCommand;
