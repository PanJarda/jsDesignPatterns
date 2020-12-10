(function(global) {
	'use strict';

	function AbstractTable(caption) {
		if (this.constructor === AbstractTable) {
			throw new InstantiationException();
		}
		this.caption = caption;
		this.rows = [];
		this.header = null;
	}

	AbstractTable.prototype.addRow = function(row) {
		this.rows.push(row);
	};

	AbstractTable.prototype.setHeader = function(header) {
		this.header = header;
	}

	AbstractTable.prototype.show = function() {
		throw new UnimplementedAbstractMethodCallException();
	};


	function AbstractRow() {
		if (this.constructor === AbstractRow) {
			throw new InstantiationException();
		}
		this.cells = [];
	}

	AbstractRow.prototype.addCell = function(cell) {
		this.cells.push(cell);
	};

	AbstractRow.prototype.show = function() {
		throw new UnimplementedAbstractMethodCallException();
	};


	function AbstractCell(content) {
		if (this.constructor === AbstractCell) {
			throw new InstantiationException();
		}
		this.content = content;
	}

	AbstractCell.prototype.show = function() {
		throw new UnimplementedAbstractMethodCallException();
	};


	function AbstractHeader() {
		if (this.constructor === AbstractHeader) {
			throw new InstantiationException();
		}
		AbstractRow.call(this);
	}

	AbstractHeader.prototype = Object.create(AbstractRow.prototype);

	AbstractHeader.prototype.constructor = AbstractHeader;

	global.DesignPatterns.AbstractFactory.Tables = {
		AbstractCell: AbstractCell,
		AbstractHeader: AbstractHeader,
		AbstractTable: AbstractTable,
		AbstractRow: AbstractRow
	};
})(this);