(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractCell = Tables.AbstractCell;

	function CSVCell(content) {
		AbstractCell.call(this, content);
	}

	CSVCell.prototype = Object.create(AbstractCell.prototype);

	CSVCell.prototype.constructor = CSVCell;

	CSVCell.prototype.show = function() {
		return this.content;
	};

	Tables.CSV.CSVCell = CSVCell;
})(this);