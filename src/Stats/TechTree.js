'use strict';
/* TechTree class */

const Base = require('../core/Base.js');

module.exports = class TechTree extends Base
{
  /**
   * @param {Object} config       describes the starting state of the tech tree
   * @param {Object} config.base  describes the base techs that have no parents
   */
   constructor(config)
   {
     super(config);
   }
};
