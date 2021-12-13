
const root_name = 'v_database';
const root_dirname = '.'+root_name;
const root_file = 'v_config.js';
const cfg_dir = process.env.home + '/' + root_dirname;
const cfg_file= cfg_dir + '/'+ root_file;

module.exports = {
    root_name,
    root_dirname,
    root_file,
    cfg_dir,
    cfg_file
};
