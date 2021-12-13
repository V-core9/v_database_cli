const { Command, flags } = require('@oclif/command');

const v_db = require('v_database');

class TypeViewCommand extends Command {
  async run() {
    const { flags } = this.parse(TypeViewCommand);
    const type = flags.type || null;

    if (type === null) {
      console.log(await v_db.type.view());
    } else {
      console.log(await v_db.type.view(type));
    }
    return true;
  }
}

TypeViewCommand.description = `Describe the command here
...
Extra documentation goes here
`;

TypeViewCommand.flags = {
  type: flags.string({ char: 't', description: 'type to list' }),
};

module.exports = TypeViewCommand;
