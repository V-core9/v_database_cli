const {Command, flags} = require('@oclif/command');

const v_db = require('v_database');
class ItemNewCommand extends Command {
  async run() {
    const {flags} = this.parse(ItemNewCommand);
    const type = flags.type || null;
    const id = flags.id || null;
    const content = flags.content || null;


    this.log(`NEW ITEM_____\nT: ${type} \nI: ${id} \nC: ${content}`);

    if (content === null) return false;

    const resp = await v_db.item.new(type, content, id);
    console.log( ( resp === true ) ? 'SUCCESS' : 'FAILED' );
    return resp;
  }
}

ItemNewCommand.description = `Creates a new item in a type
...
Use id is optional for faster lookup.
`;

ItemNewCommand.flags = {
  type: flags.string({char: 't', description: 'Type to add to.'}),
  id: flags.string({char: 'i', description: 'If you want a specific id.'}),
  content: flags.string({char: 'c', description: 'Content to add to item.'}),
};

module.exports = ItemNewCommand;
