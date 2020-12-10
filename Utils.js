"use strict"

var DesignPatterns = DesignPatterns || {};

DesignPatterns.Utils = (function() {

  function BadMethodCallException(message) {
    this.message = message;
    this.name = "BadMethodCallException";
  }

  function InstantiationException(message) {
    this.message = message;
    this.name = 'InstantiationException';
  }

  function Iterable() {}

  Iterable.prototype.rewind = function() {};
  Iterable.prototype.key = function() {};
  Iterable.prototype.next = function() {};
  Iterable.prototype.valid = function() {};
  Iterable.prototype.getCurrent = function() {};

  function ListItem(item) {
    this.item = item;
    this.next = null;
  }

  function List() {
    Iterable.call(this);
    this.first = new ListItem(null);
    this.last = this.first;
    this.current = this.first;
  }

  List.prototype = new Iterable();

  List.prototype.add = function(item) {
    this.last.next = new ListItem(item);
    this.last = this.last.next;
    return this;
  };

  List.prototype.rewind = function() {
    this.current = this.first;
    return this;
  }

  List.prototype.getCurrent = function() {
    return this.current.item;
  };

  List.prototype.next = function() {
    if (this.current.next === null) {
      return null;
    }

    this.current = this.current.next;
    return this.getCurrent();
  }

  return {
		List: List,
    BadMethodCallException: BadMethodCallException,
    InstantiationException: InstantiationException
  };
})();
