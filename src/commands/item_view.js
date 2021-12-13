const {Command, flags} = require('@oclif/command')

class ItemViewCommand extends Command {
  async run() {
    const {flags} = this.parse(ItemViewCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\V-core9\\v_database_cli\\src\\commands\\item_view.js`)
  }
}

ItemViewCommand.description = `Describe the command here
...
Extra documentation goes here
`

ItemViewCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ItemViewCommand
