const { cfg_dir } = require('../config');
const fs = require('fs');
module.exports = async () => {

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
