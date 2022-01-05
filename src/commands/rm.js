const { Command, flags } = require('@oclif/command');

const v_db = require('v_database');

class RmCommand extends Command {
  async run() {
    const { flags } = this.parse(RmCommand);
    const type = flags.type || null;
    const id = flags.id || null;
    var resp = false;
    if (type !== null) {
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

RmCommand.description = `Delete a type or an item
...
Flag -t to delete a type
Flag -i to delete an item of a type
`;

RmCommand.flags = {
  type: flags.string({ char: 't', description: 'Type Name to [create/use]' }),
  id: flags.string({ char: 'i', description: 'Item id to use [optional]' }),
};

module.exports = RmCommand;
