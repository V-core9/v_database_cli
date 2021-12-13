const { Command, flags } = require('@oclif/command');

const v_db = require('v_database');

class ItemViewCommand extends Command {
  async run() {
    const { flags } = this.parse(ItemViewCommand);
    const type = flags.type || null;
    const id = flags.id || null;

    if (type === null) return false;

    if (id === null) {
      console.log(await v_db.item.view(type));
    } else {
      console.log(await v_db.item.view(type, id));
    }
    return true;
  }
}

ItemViewCommand.description = `Describe the command here
...
Extra documentation goes here
`;

ItemViewCommand.flags = {
  type: flags.string({ char: 't', description: 'type to view' }),
  id: flags.string({ char: 'i', description: 'id to view' }),
};

module.exports = ItemViewCommand;
