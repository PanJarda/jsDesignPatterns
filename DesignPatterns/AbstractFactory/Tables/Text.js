(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables
	var AbstractCell = Tables.AbstractCell;
	var AbstractHeader = Tables.AbstractHeader;
	var AbstractRow = Tables.AbstractRow;
	var AbstractTable = Tables.AbstractTable;

	function TextTable(caption) {
		AbstractTable.call(this, caption);
	}

	TextTable.prototype = Object.create(AbstractTable.prototype);
	
	TextTable.prototype.constructor = TextTable;

	TextTable.prototype.show = function() {
		console.log(this.caption + ':');

		this.header.show();
		
		var rowCount = this.rows.length;
		for (var i = 0; i < rowCount; i++) {
			this.rows[i].show();
		}
	};

	
	function TextCell(content) {
		AbstractCell.call(this, content);
	}

	TextCell.prototype = Object.create(AbstractCell.prototype);

	TextCell.prototype.constructor = TextCell;

	TextCell.prototype.show = function() {
		return this.content;
	};


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


	function TextTableFactory() {}

	TextTableFactory.prototype.createTable = function(caption) {
		return new TextTable(caption);
	};

	TextTableFactory.prototype.createRow = function() {
		return new TextRow();
	};

	TextTableFactory.prototype.createCell = function(content) {
		return new TextCell(content);
	};

	TextTableFactory.prototype.createHeader = function() {
		return new TextHeader();
	};

	global.DesignPatterns.AbstractFactory.Tables.Text = {
		TextTableFactory: TextTableFactory
	};
})(this);