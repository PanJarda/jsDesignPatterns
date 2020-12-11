(function(global) {
  'use strict';

  var AbstractRow = global.DesignPatterns.AbstractFactory.Tables.AbstractRow;

  function HTMLRow() {
    AbstractRow.call(this);
  }

  HTMLRow.prototype = Object.create(AbstractRow.prototype);

  HTMLRow.prototype.constructor = HTMLRow;

  HTMLRow.prototype.show = function() {
    var tr = document.createElement('tr');
    var cells = this.cells;
    var N = cells.length;

    for (var i = 0; i < N; i++) {
      tr.appendChild(cells[i].show());
    }
    
    return tr;
  };

  global.DesignPatterns.AbstractFactory.Tables.HTML.HTMLRow = HTMLRow;
})(this);