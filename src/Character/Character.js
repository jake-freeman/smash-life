'use strict';
/* Character class */

module.exports = class Character
{
  /**
   * @param {Object} config        describes starting state of character
   * @param {String} config.name   character name
   * @param {Object} config.stats  the core statistics that decribe the character
   */
  constructor(config)
  {
    this.config = config;
  }

  get name()
  {
    return this.config.name;
  }

  get stats()
  {
    return this.config.stats;
  }
};
