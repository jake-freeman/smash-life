'use strict'
/*Player Character class */

const Base = require('../core/Base.js');

module.exports = class PC extends Competitor
{
  /**
   * @param {var} config.money       amount of money the player has
   * @param {Array} config.records   records of all matches against opponents
   */
   constructor(config)
   {
     super(config);
   }

   get money()
   {
     return this.config.money;
   }

   get records()
   {
     return this.config.records;
   }
};
