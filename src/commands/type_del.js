const {Command, flags} = require('@oclif/command')

class TypeDelCommand extends Command {
  async run() {
    const {flags} = this.parse(TypeDelCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\V-core9\\v_database_cli\\src\\commands\\type_del.js`)
  }
}

TypeDelCommand.description = `Describe the command here
...
Extra documentation goes here
`

TypeDelCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = TypeDelCommand
