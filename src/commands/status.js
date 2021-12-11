const { Command, flags } = require('@oclif/command');
const fs = require('fs');

//const repo_list = require('../../data/repo_list');

const root_name = 'v_db';
const root_dirname = '.'+root_name;
const cfg_dir = process.env.home + '/' + root_dirname;
const cfg_file= cfg_dir + '/config.json';

configDirCheck = async () => {

  var dir_status = false;
  try {
    fs.readdirSync(cfg_dir, 'utf8');
    dir_status = true;
  } catch (e) {
    //console.log(e);
  }

  console.log(dir_status === true ? '📂 Found Root Config Directory. ✅' : '📂 Missing Root Config Directory. 🔻');

  return dir_status;
};

configFileCheck = async () => {

  var file_status = false;
  try {
    fs.readFileSync(cfg_file, 'utf8');
    file_status = true;
  } catch (e) {
    //console.log(e);
  }

  console.log(file_status === true ? '📑 Found Root Config File. ✅' : '📑 Missing Root Config File. 🔻');

  return file_status;
};



class StatusCommand extends Command {
  async run() {
    const { flags } = this.parse(StatusCommand);
    const checklist = flags.checklist || false;
    console.log(`\n🩺 V_Database_CLI \nSystem Status Check triggered for [ --checklist >> ${checklist === false ? 'ALL' : checklist} ]\n`);


    var check_array = null;

    if (typeof checklist === 'string') {
      console.log(checklist);
      check_array = checklist.split(' ');

      if (check_array.indexOf('cfg_dir') > -1) {
        configDirCheck();
      }

      if (check_array.indexOf('cfg_file') > -1) {
        configFileCheck();
      }

    }


    if (checklist === false) {
      await configDirCheck();
      await configFileCheck();
    }


  }
}

StatusCommand.description = `Check the status of CLI tool and system.
...
Look for into the config directory and config file.

Flags Additional Options:
  -c, --checklist  >>  [ "cfg_dir", "cfg_file" ]

Example:
  v9 cli_status -c='cfg_dir cfg_file '
`;

StatusCommand.flags = {
  checklist: flags.string({ char: 'c', description: 'Check the CLI system status, will check all if empty.' }),
};

module.exports = StatusCommand;
