'use strict';
/* SmashGame class */

const Base      = require('../core/Base.js'),
      Character = require('../Character/Character.js');

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

    // call constructor for each character in the game config
    this.config.characters.forEach((char_config, i, chars) => {
      chars[i] = new Character(char_config);
    });

    // also call constructors for stages
    this.config.stages.forEach((stage_config, i, stages) => {
      // [FUTUREHACK]: Uncomment when stage class is created
      //stages[i] = new Stage(stage_config);
    });
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
