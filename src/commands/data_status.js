const {Command, flags} = require('@oclif/command')

class DataStatusCommand extends Command {
  async run() {
    const {flags} = this.parse(DataStatusCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from C:\\Users\\v__V_\\.v9\\projects\\v_database_cli\\src\\commands\\data_status.js`)
  }
}

DataStatusCommand.description = `Describe the command here
...
Extra documentation goes here
`

DataStatusCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DataStatusCommand
