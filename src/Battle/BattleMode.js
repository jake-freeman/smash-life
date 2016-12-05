'use strict';
/* BattleMode class */

const _ = require('lodash');

const Base      = require('../core/Base.js'),
      Character = require('../Character/Character.js');

module.exports = class BattleMode extends Base
{
  get name()
  {
    throw "Did not override!";
  }

  static enterMode(battleState, battleConfig, cb)
  {
    throw "Not a valid mode to enter!";
  }

  static updateState()
  {
    throw "Did not override!";
  }

  static _getStat(competitor, stat)
  {
    return competitor[stat];
  }

  static _giveDamage(competitor, damage)
  {
    competitor.damage += damage;
  }
};
