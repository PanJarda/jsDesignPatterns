(function(global) {
	'use strict';

	var Utilities = global.DesignPatterns.AbstractFactory.Tables.Utilities;

	function PublicationList(tableFactory) {
		this.tableFactory = tableFactory;
	}

	PublicationList.prototype.displayTable = function(data) {
		var factory = this.tableFactory;
		var table = factory.createTable('Publication list');
		var header = factory.createHeader();
		
		header.addCell(factory.createHeaderCell('Category'));
		header.addCell(factory.createHeaderCell('Page count'));
		header.addCell(factory.createHeaderCell('sd'));
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

	Utilities.PublicationList = PublicationList;
})(this);