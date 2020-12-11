(function(global) {
  'use strict';

  var Tables = global.DesignPatterns.AbstractFactory.Tables;
  var AbstractTable = Tables.AbstractTable;

  function CSVTable(caption) {
    AbstractTable.call(this, caption);
  }

  CSVTable.prototype = Object.create(AbstractTable.prototype);
  
  CSVTable.prototype.constructor = CSVTable;

  CSVTable.prototype.show = function() {
    var buffer = '';
    buffer += this.header.show();
    
    var rowCount = this.rows.length;
    for (var i = 0; i < rowCount; i++) {
      buffer += this.rows[i].show();
    }

    console.log(buffer);
  };

  Tables.CSV.CSVTable = CSVTable;
})(this);