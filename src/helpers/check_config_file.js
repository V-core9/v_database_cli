const { cfg_file } = require('../config');
const fs = require('fs');

module.exports = async () => {

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
