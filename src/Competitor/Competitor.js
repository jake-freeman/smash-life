'use strict';
/* Competitor abstract class */

const Base = require('../core/Base.js');

module.exports = class Competitor extends Base
{
  /**
   * constructor variables
   * @param {Object} config        describes starting state of a player
   * @param {String} config.name   real name
   * @param {String} config.tag    gamertag
   * @param {Array}  config.mains  string array of mains
   * @param {Object} config.stats  object that has all stats in it
   */
  constructor(config)
  {
    super(config);
  }

  get name()
  {
    return this.config.name;
  }

  get tag()
  {
    return this.config.tag;
  }

  get mains()
  {
    return this.config.mains;
  }

  get stats()
  {
    return this.config.stats;
  }
};
