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
   * Reads config from specified level
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
  }

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
