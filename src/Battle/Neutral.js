'use strict';
/* BattleState class */

const _ = require('lodash');

const Base       = require('../core/Base.js'),
      Character  = require('../Character/Character.js'),
      BattleMode = require('./BattleMode.js');

const neutralOptions = {
  aggro: "Aggro",
  threaten: "Threaten",
  camp: "Camp",
  download: "Download"
};

module.exports = class Neutral extends BattleMode
{
  get name()
  {
    return 'Neutral';
  }

  static enterMode(battleState, battleConfig, cb)
  {
    // prompt user to choose option
    var humOption = this._promptHumOption();

    // choose option for NPC
    var npcOption = this._chooseNpcOption(humOption, battleState, battleConfig);

    // update battleState based on options choosen vs stats
    this.updateState(npcOption, humOption, battleState, battleConfig);
  }

  static _promptHumOption()
  {
    // [TODO]: Have user choose neutral option
  }

  static _chooseNpcOption(humOption, battleState, battleConfig)
  {
    // [NOTE]: I currently have this function take the human option
    //         into account. We may choose to attempt to write a more
    //         inteligent AI that would not know what the human has choosen
    //         ahead of time.

    // [TODO]: Have npc choose neutral option based on the battle state
    //         and AI difficulty
  }

  static updateState(npcOption, humOption, battleState, battleConfig)
  {
    // check if either option is aggro, or that they match
    // if they do, a stat comparison is needed
    if (this._eitherOption(npcOption, humOption, neutralOptions.download)) {
      // [TODO]: Handle download case
      return;
    }
    else if (this._eitherOption(npcOption, humOption, neutralOptions.aggro)) {
      let humanWon = this._humanWin(npcOption, humOption, battleConfig);
      this._assignHumControl(humanWon, battleState);

      // [HACK]: this is a very bad way of doing this, but it is what
      // I'll do for now
      if (npcOption === neutralOptions.threaten) {
        if (!humanWon) {
          // [HACK]: assign random damage to human competitor
          this._giveDamage(battleState.humCompetitor, Math.random() * 20);
          return;
        }
        else {
          // [HACK]: There should be a "modes" object at some point
          battleState.mode = 'punish';
          return;
        }
      }
      else if (humOption === neutralOptions.threaten) {
        if (humanWon) {
          // [HACK]: assign random damage to npc competitor
          this._giveDamage(battleState.npcCompetitor, Math.random() * 20);
          return;
        }
        else {
          // [HACK]: There should be a "modes" object at some point
          battleState.mode = 'punish';
          return;
        }
      }
      else if (npcOption === neutralOptions.camp) {
        if (!humanWon) {
          // [HACK]: assign random damage to human competitor
          this._giveDamage(battleState.humCompetitor, Math.random() * 20);
          return;
        }
        else {
          // [HACK]: There should be a "modes" object at some point
          battleState.mode = 'punish';
          return;
        }
      }
      else if (humOption === neutralOptions.camp) {
        if (humanWon) {
          // [HACK]: assign random damage to npc competitor
          this._giveDamage(battleState.npcCompetitor, Math.random() * 20);
          return;
        }
        else {
          // [HACK]: There should be a "modes" object at some point
          battleState.mode = 'punish';
          return;
        }
      }
      // this would have to be agro vs agro
      else {
        // [HACK]: There should be a "modes" object at some point
        battleState.mode = 'punish';
        return;
      }
    }
    else if (this._eitherOption(npcOption, humOption, neutralOptions.threaten)) {
      if (npcOption === neutralOptions.camp) {
        // [HACK]: assign random damage to human competitor
        this._giveDamage(battleState.humCompetitor, Math.random() * 20);
        // give stage control to npc
        this._assignHumControl(false, battleState);
        return;
      }
      else if (humOption === neutralOptions.camp) {
        // [HACK]: assign random damage to npc competitor
        this._giveDamage(battleState.npcCompetitor, Math.random() * 20);
        // give stage control to human
        this._assignHumControl(true, battleState);
        return;
      }
      // must be threaten vs threaten
      else {
        let humanWon = this._humanWin(npcOption, humOption, battleConfig);
        this._assignHumControl(humanWon, battleState);
        return;
      }
    }
    // at this point camp vs camp is all that's left
    else {
      // [TODO]: Implement camp vs camp
      this._assignNoControl(battleState);
      return;
    }
  }

  static _humanWin(npcOption, humOption, battleConfig)
  {
    // [TODO]: Implement comaprison calculation as described in the
    //         design document. Return true for human win and false for
    //         npc win

    // [HACK]: Return random value for now
    return Math.random() < 0.5;
  }

  static _assignHumControl(humanWon, battleState)
  {
    // Assigns "control" winning player in exchange.
    // Control is used for both stage control and for
    // who is executing the punish / edgeguard
    battleState.humCompetitor.control = humanWon;
    battleState.npcCompetitor.control = !humanWon;
  }

  static _assignNoControl(battleState) {
    battleState.humCompetitor.control = false;
    battleState.npcCompetitor.control = false;
  }

  /**
   * check if either op1 or op2 are equal to comp
   *
   * @return {Boolean}  true if op1 or op2 equal comp
   */
  static _eitherOption(op1, op2, comp)
  {
    return ((op1 === comp) || (op2 === comp));
  }
};
