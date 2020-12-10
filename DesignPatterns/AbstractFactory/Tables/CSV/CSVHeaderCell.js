(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractHeaderCell = Tables.AbstractHeaderCell;
	
	function CSVHeaderCell(content) {
		AbstractHeaderCell.call(this, content);
	}

	CSVHeaderCell.prototype = Object.create(AbstractHeaderCell.prototype);

	CSVHeaderCell.prototype.constructor = CSVHeaderCell;

	CSVHeaderCell.prototype.show = function() {
		return this.content;
	};

	Tables.CSV.CSVHeaderCell = CSVHeaderCell;
})(this);