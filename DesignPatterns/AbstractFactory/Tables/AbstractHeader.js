(function(global) {
	'use strict';

	var InstantiationException = global.DesignPatterns.AbstractFactory.InstantiationException;
	var AbstractRow = global.DesignPatterns.AbstractFactory.Tables.AbstractRow;

	function AbstractHeader() {
		if (this.constructor === AbstractHeader) {
			throw new InstantiationException();
		}
		AbstractRow.call(this);
	}

	AbstractHeader.prototype = Object.create(AbstractRow.prototype);

	AbstractHeader.prototype.constructor = AbstractHeader;

	global.DesignPatterns.AbstractFactory.Tables.AbstractHeader = AbstractHeader;
})(this);