"use strict"

module.exports=class Competitor
{
  /**
  * constructor variables
  * @param {Object} config: describes starting state of a player
  * @param {String} name: real name
  * @param {String} tag: gamertag
  * @param {Array} mains: string array of mains
  * @param {Object} Stats: object that has all stats in it
  */

  constructor(config)
  {
    this.config=config;
  }

  get name()
  {
    return this.config.name;
  }

  get tag()
  {
    return this.config.tag;
  }

  get mains()
  {
    return this.config.mains;
  }

  get stats()
  {
    return this.config.stats;
  }

}
