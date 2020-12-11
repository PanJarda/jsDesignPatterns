(function(global) {
	'use strict';
	var AbstractFactory = global.DesignPatterns.AbstractFactory;
	var InstantiationException = AbstractFactory.InstantiationException;
	var UnimplementedAbstractMethodCallException = AbstractFactory.UnimplementedAbstractMethodCallException;

	function AbstractCell(content) {
		if (this.constructor === AbstractCell) {
			throw new InstantiationException();
		}
		this.content = content;
	}

	AbstractCell.prototype.show = function() {
		throw new UnimplementedAbstractMethodCallException();
	};

	AbstractFactory.Tables.AbstractCell = AbstractCell;
})(this);