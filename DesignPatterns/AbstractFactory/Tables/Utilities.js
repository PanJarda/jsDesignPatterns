(function(global) {
	'use strict';

	function PublicationList(tableFactory) {
		this.tableFactory = tableFactory;
	}

	PublicationList.prototype.displayTable = function(data) {
		var factory = this.tableFactory;
		var table = factory.createTable('Publication list');
		var header = factory.createHeader();
		
		header.addCell(factory.createCell('Category'));
		header.addCell(factory.createCell('Page count'));
		table.setHeader(header);

		var cell, row;
		var rowCount = data.length;
		for (var i = 0; i < rowCount; i++) {
			row = factory.createRow();
			var dataRow = data[i];
			var fieldCount = dataRow.length;
			for (var j = 0; j < fieldCount; j++) {
				cell = factory.createCell(dataRow[j]);
				row.addCell(cell);
			};
			table.addRow(row);
		}

		return table.show();
	};

	PublicationList.prototype.setTableFactory = function(tableFactory) {
		this.tableFactory = tableFactory;
	};

	global.DesignPatterns.AbstractFactory.Tables.Utilities = {
		PublicationList: PublicationList
	};
})(this);