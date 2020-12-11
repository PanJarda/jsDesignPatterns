(function(global) {
  'use strict';

  var InstantiationException = global.DesignPatterns.AbstractFactory.InstantiationException;
  var UnimplementedAbstractMethodCallException = global.DesignPatterns.AbstractFactory.UnimplementedAbstractMethodCallException;

  function AbstractHeaderCell(content) {
    if (this.constructor === AbstractHeaderCell) {
      throw new InstantiationException();
    }
    this.content = content;
  }

  AbstractHeaderCell.prototype.show = function() {
    throw new UnimplementedAbstractMethodCallException();
  };

  global.DesignPatterns.AbstractFactory.Tables.AbstractHeaderCell = AbstractHeaderCell;
})(this);