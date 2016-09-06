'use strict';

const Base = require('../core/Base.js');

module.exports = class NPC extends Competitor
{
  /**
   * constructor variables
   * @param {var} config.difLevel   number representing how hard opponent is
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
