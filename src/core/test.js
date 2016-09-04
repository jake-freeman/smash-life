'use strict';
/* Character class */

const Base = require('../core/Base.js');

module.exports = class Character extends Base
{


  get name()
  {
    return this.config.name;
  }

  get stats()
  {
    return this.config.stats;
  }
};
