'use strict';
/* SmashGame class */

const Base = require('../core/Base.js');

module.exports = class SmashGame extends Base
{
  /**
   * @param {Object} config             describes starting state of smash game
   * @param {String} config.name        game name
   * @param {Array}  config.characters  array of characters that make up the game
   * @param {Array}  config.stages      array of available stages in the game
   */
  constructor(config)
  {
    super(config);
  }

  get name()
  {
    return this.config.name;
  }

  get characters()
  {
    return this.config.characters;
  }

  get stages()
  {
    return this.config.stages;
  }
};
