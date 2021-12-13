const {Command, flags} = require('@oclif/command')

class ItemNewCommand extends Command {
  async run() {
    const {flags} = this.parse(ItemNewCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\V-core9\\v_database_cli\\src\\commands\\item_new.js`)
  }
}

ItemNewCommand.description = `Describe the command here
...
Extra documentation goes here
`

ItemNewCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ItemNewCommand
