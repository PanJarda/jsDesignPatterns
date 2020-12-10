(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractHeader = Tables.AbstractHeader;
	
	function CSVHeader() {
		AbstractHeader.call(this);
	}

	CSVHeader.prototype = Object.create(AbstractHeader.prototype);

	CSVHeader.prototype.constructor = CSVHeader;

	CSVHeader.prototype.show = function() {
		var cells = this.cells;
		var N = cells.length;
		var rowBuffer = [];
		for (var i = 0; i < N; i++) {
			rowBuffer.push(cells[i].show());
		}

		return rowBuffer.join(',') + '\n';
	};

	Tables.CSV.CSVHeader = CSVHeader;
})(this); 