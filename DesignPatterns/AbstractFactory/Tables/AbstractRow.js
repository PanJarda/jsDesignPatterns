(function(global) {
  'use strict';

  var InstantiationException = global.DesignPatterns.AbstractFactory.InstantiationException;
  var UnimplementedAbstractMethodCallException = global.DesignPatterns.AbstractFactory.UnimplementedAbstractMethodCallException;

  function AbstractRow() {
    if (this.constructor === AbstractRow) {
      throw new InstantiationException();
    }
    this.cells = [];
  }

  AbstractRow.prototype.addCell = function(cell) {
    this.cells.push(cell);
  };

  AbstractRow.prototype.show = function() {
    throw new UnimplementedAbstractMethodCallException();
  };

  global.DesignPatterns.AbstractFactory.Tables.AbstractRow = AbstractRow;
})(this);