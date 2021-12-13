const { Command, flags } = require('@oclif/command');

const { checkConfigDir, checkConfigFile } = require('../helpers');






class StatusCommand extends Command {
  async run() {
    const { flags } = this.parse(StatusCommand);
    const checklist = flags.checklist || null;

    console.log(`\n🩺 V_Database_CLI >> System Status Check [ --checklist == '${checklist === null ? 'ALL' : checklist}' ]\n`);

    var check_array = null;

    if (typeof checklist === 'string') {
      // Split the string into array
      check_array = checklist.split(' ');

      // Check for config dir
      if (check_array.indexOf('cfg_dir') > -1) {
        checkConfigDir();
      }

      // Check for the root config file
      if (check_array.indexOf('cfg_file') > -1) {
        checkConfigFile();
      }

    }

    // Trigger all check if null
    if (checklist === null) {
      await checkConfigDir();
      await checkConfigFile();
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
