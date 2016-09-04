'use strict';
/**
 * ConfigModel -  Set of methods for loading
 * configuration from a file
 */

// libs
const fs = require('fs');

// Exceptions
const BadTypeException = require('./Exception/BadTypeException.js');

module.exports = class Base
{
  /**
   * Default constructor will attempt to read config from file if
   * passed a string, will simply assign config object otherwise
   *
   * @param {E} config  Config object or path to config object
   */
   constructor(config)
   {
     if (typeof config === "string") {
       this._readConfig(config);
     }
     else {
       this.config = config;
     }
   }

  /**
   * Reads config from specified file
   *
   * @param {String} filepath  Path to the json file
   */
  _readConfig(filepath)
  {
    if (typeof filepath !== "string") {
      throw new BadTypeException(filepath);
    }

    try {
      var obj = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    }
    catch (err) {
      console.error(err);
    }
    this.config = obj;
  }

  /**
   * Writes config to specified file
   *
   * @param {String} filepath  Path to write the json file to
   */
  _writeConfig(filepath)
  {
    if (typeof filepath !== "string") {
      throw new BadTypeException(filepath);
    }

    try {
      fs.writeFileSync(filepath, JSON.stringify(this.config));
    }
    catch (err) {
      console.error(err);
    }
  }
};
