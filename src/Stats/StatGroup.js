'use strict';
/* StatGroup class */

module.exports = class StatGroup
{
  /**
   * @param {Object} config        describes starting state of the stat group
   * @param {String} config.name   Name of the stat group
   * @param {Object} config.stats  The `name: value` pairs that make up the stat group
   *
   */
  constructor(config)
  {
    this.config = config;
  }

  get name()
  {
    return this.config.name;
  }

  /**
   * @param {String} name  Name of the specific stat
   *
   * @returns {value}  The value of the object
   */
  stat(name) {
    return this.config.stats[name];
  }
};
