(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractRow = Tables.AbstractRow;
	
	function CSVRow() {
		AbstractRow.call(this);
	}

	CSVRow.prototype = Object.create(AbstractRow.prototype);

	CSVRow.prototype.constructor = CSVRow;

	CSVRow.prototype.show = function() {
		var rowBuffer = [];
		var cells = this.cells;
		var N = cells.length;
		for (var i = 0; i < N; i++) {
			rowBuffer.push(cells[i].show());
		}

		return rowBuffer.join(',') + '\n';
	};

	Tables.CSV.CSVRow = CSVRow;
})(this);