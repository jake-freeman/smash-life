'use strict';
/**
 * BaseValueException class
 */

  const BaseException = require('./BaseException.js');

module.exports = class BaseValueException extends BaseException
{
  /**
   * @param {E} message  Value that caused the exception
   */
  constructor(value)
  {
    let message = this.message || "Invalid Value";
    this.name = "Value Exception";

    super(message);
  }
};
