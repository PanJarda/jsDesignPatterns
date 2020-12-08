/**
 *
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2014  Jaroslav Pernica
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

"use strict"

var DesignPatterns = DesignPatterns || {};

DesignPatterns.Utils = (function() {

  function BadMethodCallException(message) {
    this.message = message;
    this.name = "BadMethodCallException";
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
		BadMethodCallException: BadMethodCallException
  };
})();
