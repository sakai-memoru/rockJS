/**
 * @fileoverview cson config setting
 * @description
 *  ./config directoryにある「*.cson」filesを、readし
 *  configurationとして、初期化する。
 * @author sakai.mitsuru
 * @since 2016/12/04
 */
var fs = require('fs');
var path = require('path');
var CONS_CONFIG_DIR = './config';

// config file list
function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        if(path.extname(filePath) === '.cson'){
          var stat = fs.statSync(filePath);
          if (stat.isFile()) {
              callback(filePath, stat);
          } else if (stat.isDirectory()) {
              null;
              // walkSync(filePath, callback);
          }
        }
    });
}

//
var execute_ = () => {
  walkSync(CONS_CONFIG_DIR, function(filePath, stat) {
    // do something with "filePath"...
    console.log('read conf ... ' + filePath);
  });
}
class Config{};
Config.prototype.execute = execute_;

//debug
var conf = new Config();
conf.execute();

console.log(process.cwd());
