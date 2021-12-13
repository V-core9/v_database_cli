const {Command, flags} = require('@oclif/command');

const v_db = require('v_database');
class ItemDelCommand extends Command {
  async run() {
    const {flags} = this.parse(ItemDelCommand);
    const type = flags.type || null;
    const id = flags.id || null;

    if (id === null || type === null) return false;

    const resp = await v_db.item.del(type, id);
    console.log( ( resp === true ) ? 'SUCCESS' : 'FAILED' );
    return resp;
  }
}

ItemDelCommand.description = `Creates a new item in a type
...
Use id is optional for faster lookup.
`;

ItemDelCommand.flags = {
  type: flags.string({char: 't', description: 'Type to add to.'}),
  id: flags.string({char: 'i', description: 'If you want a specific id.'}),
};

module.exports = ItemDelCommand;
