'use strict';
/**
 * BadTypeException class
 */

 const BaseValueException = require('./BaseValueException.js');

module.exports = class BadTypeException extends BaseValueException
{
  constructor(value)
  {
    this.value   = value;
    this.message = "Type assertion failed";
    this.name    = "Bad Type Exception";

    super();
  }
};
