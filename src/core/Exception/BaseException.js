'use strict';
/**
 * BaseException class
 */

module.exports = class BaseException
{
  /**
   * @param {String} message  Describes the exception
   */
  constructor(message)
  {
    this.message = message || this.message || "No Message";
    this.name    = this.name || "Generic Exception";
  }
};
