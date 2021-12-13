const { Command, flags } = require('@oclif/command');

const v_db = require('v_database');

class DeleteCommand extends Command {
  async run() {
    const { flags } = this.parse(DeleteCommand);
    const type = flags.type || null;
    const id = flags.id || null;
    console.log(flags);

    var resp = false;

    if (type === null) {
      console.log('missing type');
      return false;
    } else {
      if (id === null) {
        resp = await v_db.type.del(type);
      } else {
        resp = await v_db.item.del(type, id);
      }
    }
    console.log(resp);
    return resp;
  }
}

DeleteCommand.description = `Describe the command here
...
Extra documentation goes here
`;

DeleteCommand.flags = {
  type: flags.string({ char: 't', description: 'Type Name to [create/use]' }),
  id: flags.string({ char: 'i', description: 'Item id to use [optional]' }),
};

module.exports = DeleteCommand;
