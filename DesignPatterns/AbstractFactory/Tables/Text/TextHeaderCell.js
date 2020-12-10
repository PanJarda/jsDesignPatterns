(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractHeaderCell = Tables.AbstractHeaderCell;
	
	function TextHeaderCell(content) {
		AbstractHeaderCell.call(this, content);
	}

	TextHeaderCell.prototype = Object.create(AbstractHeaderCell.prototype);

	TextHeaderCell.prototype.constructor = TextHeaderCell;

	TextHeaderCell.prototype.show = function() {
		return this.content;
	};

	Tables.Text.TextHeaderCell = TextHeaderCell;
})(this);