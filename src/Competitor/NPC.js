'use strict';
/* Non-Player Character class*/

const Competitor = require('./Competitor.js');

module.exports = class NPC extends Competitor
{
  /**
   * constructor variables
   * @param {Number} config.difLevel   number representing how hard opponent is
   */
   constructor(config)
   {
     super(config);
   }

   get difLevel()
   {
     return this.config.difLevel;
   }
};
