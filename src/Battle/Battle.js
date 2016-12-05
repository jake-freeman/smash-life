'use strict';
/* Battle class */

// Libs
const _ = require('lodash');

const Base      = require('../core/Base.js'),
      Character = require('../Character/Character.js'),
      Neutral   = require('./Neutral.js');

// Battle Modes
const modes = {
  // [TODO]: Add other modes
  neutral: Neutral/*,
  punish: Punish,
  edgeguard: Edgeguard*/
};

module.exports = class Battle extends Base
{
  /**
   * @param {Object} config
   *        describes configuration for the battle
   * @param {Competitor} config.humCompetitor
   *        object describing the human competitor
   * @param {NPC} config.npcCompetitor
   *        object describing the NPC competitor
   * @param {Stage} config.stage
   *        stage where the battle is taking place
   * @param {Object} config.ruleMod
   *        describes rule modifications (from the default)
   * @param {Object} config.state
   *        [FUTUREHACK]: used to restore state of battle on load
   */
  constructor(config)
  {
    super(config);

    this.rules = this.config.ruleMod;

    const initCompetitorState = {
        damage: 0,
        stocks: this.rules.stocks,
        control: false
    };

    const initialBattleState = {
      humCompetitor: _.defaults({}, initCompetitorState),
      npcCompetitor: _.defaults({}, initialBattleState),
      remTime: this.rules.timeLimit,
      status: "true-neutral",
      mode: "neutral",
      active: false
    };

    this.state = this.config.state || initialBattleState;
  }

  /**
   * Set the battle state to active, begin timer, enter
   * battle loop
   */
  setActive()
  {
    this.state.active = true;
    /* [TODO]: Start match timer thread here */
    this.battleLoop();
  }

  battleLoop()
  {
    // enter current battle mode (as decided by last mode)
    // check mode and control, set status accoordingly
  }

  /**
   * modifies rules based on default rules
   *
   * @param {Object} ruleMod           modifications to default rules
   * @param {Number} ruleMod.stocks    number of stocks each character has (default = 4)
   * @param {Number} ruleMod.timeLimit time limit for battle in seconds (default = 480)
   */
  set rules(ruleMod)
  {
    const defaultRules = {
      stocks: 4,
      timeLimit: 480 // 8 minutes
    };

    this.rules = _.defaults(ruleMod, defaultRules);
  }

  get rules()
  {
    return this.rules;
  }
};
