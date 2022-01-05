const { Command, flags } = require('@oclif/command');

const v_db = require('v_database');

class MkCommand extends Command {
  async run() {
    const { flags } = this.parse(MkCommand);
    const type = flags.type || null;
    const id = flags.id || null;
    const content = flags.content || null;
    console.log(flags);

    var resp = false;

    if (type !== null) {
      if (content === null) {
        resp = await v_db.type.new(type);
      } else {
        if (id === null) {
          resp = await v_db.item.new(type, content);
        } else {
          resp = await v_db.item.new(type, content, id);
        }
      }
    }
    console.log(resp);
    return resp;
  }
}

MkCommand.description = `Make new type or item
...
Extra documentation goes here
`;

MkCommand.flags = {
  type: flags.string({ char: 't', description: 'Type Name to [create/use]' }),
  id: flags.string({ char: 'i', description: 'Item id to use [optional]' }),
  content: flags.string({ char: 'c', description: 'Content to use if adding item to type.' }),
};

module.exports = MkCommand;
