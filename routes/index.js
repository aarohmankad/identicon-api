const
  express = require('express'),
  fs = require('fs'),
  path = require('path'),
  router = express.Router();

/**
 * returns all folder names in `srcpath` directory
 * @param srcpath {String} Directory you want to get folder names from
 * @return {Array} all folder names in `srcpath` directory
 */
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter((file) => {
    path.resolve(__dirname, file);
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
};

/**
 * function is called when file is `required`
 */
module.exports = (app) => {
  let folders = getDirectories(__dirname);
  
  app.use('/', router);

  folders.forEach((folder) => {
    fs.readdirSync(__dirname + '/' + folder).forEach((file) => {
      if (file == 'index.js') return;
      
      var name = file.substr(0, file.indexOf('.'));
      require('./' + folder + '/' + name)(router);
    });
  });
};