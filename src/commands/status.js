const { Command, flags } = require('@oclif/command');
const v_db = require("v_database");

class StatusCommand extends Command {
  async run() {
    const { flags } = this.parse(StatusCommand);
    const checklist = flags.checklist || null;

    console.log(`\n🩺 v_db_CLI >> System Status Check [ --checklist == '${checklist === null ? 'ALL' : checklist}' ]\n`);

    var check_array = null;

    if (typeof checklist === 'string') {
      // Split the string into array
      check_array = checklist.split(' ');

      // Check for config dir
      if (check_array.indexOf('cfg_dir') > -1) {
        console.log(await v_db.check_config_dir());
      }

      // Check for the root config file
      if (check_array.indexOf('cfg_file') > -1) {
        console.log(await v_db.check_config_file());
      }

    }

    // Trigger all check if null
    if (checklist === null) {
      console.log(await v_db.check_config_dir());
      console.log(await v_db.check_config_file());
    }


  }
}

StatusCommand.description = `Check the status of CLI tool and system.
...
Look for into the config directory and config file.

Flags Additional Options:
  -c, --checklist  >>  [ "cfg_dir", "cfg_file" ]

Example:
  v9 cli_status -c='cfg_dir cfg_file'
`;

StatusCommand.flags = {
  checklist: flags.string({ char: 'c', description: 'Check the CLI system status, will check all if empty.' }),
};

module.exports = StatusCommand;
