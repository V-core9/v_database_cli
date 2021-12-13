const { Command, flags } = require('@oclif/command');

const v_db = require('v_database');

class ViewCommand extends Command {
  async run() {
    const { flags } = this.parse(ViewCommand);
    const type = flags.type || null;
    const id = flags.id || null;
    console.log(flags);

    var resp = false;
    if (type === null) {
      resp = await v_db.type.view();
    } else {

      if (id === null) {
        resp = await v_db.item.view(type);
      } else {
        resp = await v_db.item.view(type, id);
      }
    }
    console.log(resp);
    return resp;
  }
}

ViewCommand.description = `View a type list, list of items in a type or specific item
...
Will list all types when triggered without specifying type or id[with type].
`;

ViewCommand.flags = {
  type: flags.string({ char: 't', description: 'type to view' }),
  id: flags.string({ char: 'i', description: 'id to view' }),
};

module.exports = ViewCommand;
