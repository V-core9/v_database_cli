const { Command, flags } = require('@oclif/command');

const v_db = require('v_database');

class TypeViewCommand extends Command {
  async run() {
    const { flags } = this.parse(TypeViewCommand);
    const type = flags.type || null;
    const id = flags.id || null;

    if (type === null || id === null) return false;
    const resp = await v_db.item.del(type, id);
    console.log(resp);
    return resp;
  }
}

TypeViewCommand.description = `Describe the command here
...
Extra documentation goes here
`;

TypeViewCommand.flags = {
  type: flags.string({ char: 't', description: 'type to view' }),
  id: flags.string({ char: 'i', description: 'id to view' }),
};

module.exports = TypeViewCommand;
