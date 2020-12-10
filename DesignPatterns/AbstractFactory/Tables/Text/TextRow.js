(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractRow = Tables.AbstractRow;
	
	function TextRow() {
		AbstractRow.call(this);
	}

	TextRow.prototype = Object.create(AbstractRow.prototype);

	TextRow.prototype.constructor = TextRow;

	TextRow.prototype.show = function() {
		var rowBuffer = [];
		var cells = this.cells;
		var N = cells.length;
		for (var i = 0; i < N; i++) {
			rowBuffer.push(cells[i].show());
		}

		console.log(rowBuffer.join(' | '));
	};

	Tables.Text.TextRow = TextRow;
})(this);