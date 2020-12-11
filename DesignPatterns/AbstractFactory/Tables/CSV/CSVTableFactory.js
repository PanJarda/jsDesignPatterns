(function(global) {
  'use strict';

  var CSV = global.DesignPatterns.AbstractFactory.Tables.CSV;
  var CSVCell = CSV.CSVCell;
  var CSVHeaderCell = CSV.CSVHeaderCell;
  var CSVTable = CSV.CSVTable;
  var CSVRow = CSV.CSVRow;
  var CSVHeader = CSV.CSVHeader;

  function CSVTableFactory(htmlRoot) {
    this.htmlRoot = htmlRoot;
  }

  CSVTableFactory.prototype.createCell = function(content) {
    return new CSVCell(content);
  };

  CSVTableFactory.prototype.createHeaderCell = function(content) {
    return new CSVHeaderCell(content);
  };

  CSVTableFactory.prototype.createRow = function() {
    return new CSVRow();
  };

  CSVTableFactory.prototype.createTable = function(caption) {
    return new CSVTable(caption, this.htmlRoot);
  };

  CSVTableFactory.prototype.createHeader = function() {
    return new CSVHeader();
  };

  global.DesignPatterns.AbstractFactory.Tables.CSV.CSVTableFactory = CSVTableFactory;

})(this);