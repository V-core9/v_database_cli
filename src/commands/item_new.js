const {Command, flags} = require('@oclif/command');

class ItemNewCommand extends Command {
  async run() {
    const {flags} = this.parse(ItemNewCommand);
    const type = flags.type || null;
    const id = flags.id || null;
    const content = flags.content || null;


    this.log(`NEW ITEM_____\nT: ${type} \nI: ${id} \nC: ${content}`);

  }
}

ItemNewCommand.description = `Describe the command here
...
Extra documentation goes here
`;

ItemNewCommand.flags = {
  type: flags.string({char: 't', description: 'Type to add to.'}),
  id: flags.string({char: 'i', description: 'If you want a specific id.'}),
  content: flags.string({char: 'c', description: 'Content to add to item.'}),
};

module.exports = ItemNewCommand;
