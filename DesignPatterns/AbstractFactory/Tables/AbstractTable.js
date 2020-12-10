(function(global) {
	'use strict';

	var InstantiationException = global.DesignPatterns.AbstractFactory.InstantiationException;
	var UnimplementedAbstractMethodCallException = global.DesignPatterns.AbstractFactory.UnimplementedAbstractMethodCallException;

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

	global.DesignPatterns.AbstractFactory.Tables.AbstractTable = AbstractTable;
})(this);