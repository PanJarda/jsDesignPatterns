(function(global) {
  'use strict';

  var Tables = global.DesignPatterns.AbstractFactory.Tables;
  var AbstractHeader = Tables.AbstractHeader;
  
  function TextHeader() {
    AbstractHeader.call(this);
  }

  TextHeader.prototype = Object.create(AbstractHeader.prototype);

  TextHeader.prototype.constructor = TextHeader;

  TextHeader.prototype.show = function() {
    var cells = this.cells;
    var N = cells.length;
    var rowBuffer = [];
    for (var i = 0; i < N; i++) {
      rowBuffer.push(cells[i].show());
    }

    console.log(rowBuffer.join(' | '));

    console.log('-----------------');
  };

  Tables.Text.TextHeader = TextHeader;
})(this); 