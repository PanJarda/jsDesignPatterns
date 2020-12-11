(function(global) {
  'use strict';

  var Tables = global.DesignPatterns.AbstractFactory.Tables;
  var AbstractCell = Tables.AbstractCell;
  
  function TextCell(content) {
    AbstractCell.call(this, content);
  }

  TextCell.prototype = Object.create(AbstractCell.prototype);

  TextCell.prototype.constructor = TextCell;

  TextCell.prototype.show = function() {
    return this.content;
  };

  Tables.Text.TextCell = TextCell;
})(this);