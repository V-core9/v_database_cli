const {Command, flags} = require('@oclif/command')

class ItemDelCommand extends Command {
  async run() {
    const {flags} = this.parse(ItemDelCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\V-core9\\v_database_cli\\src\\commands\\item_del.js`)
  }
}

ItemDelCommand.description = `Describe the command here
...
Extra documentation goes here
`

ItemDelCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ItemDelCommand
