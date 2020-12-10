(function(global) {
	'use strict';

	var InstantiationException = global.DesignPatterns.AbstractFactory.InstantiationException;
	var UnimplementedAbstractMethodCallException = global.DesignPatterns.AbstractFactory.UnimplementedAbstractMethodCallException;

	function AbstractCell(content) {
		if (this.constructor === AbstractCell) {
			throw new InstantiationException();
		}
		this.content = content;
	}

	AbstractCell.prototype.show = function() {
		throw new UnimplementedAbstractMethodCallException();
	};

	global.DesignPatterns.AbstractFactory.Tables.AbstractCell = AbstractCell;
})(this);