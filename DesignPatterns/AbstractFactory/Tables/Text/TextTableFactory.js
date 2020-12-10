(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables
	var TextCell = Tables.Text.TextCell;
	var TextTable = Tables.Text.TextTable;
	var TextRow = Tables.Text.TextRow;
	var TextHeader = Tables.Text.TextHeader;

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

	global.DesignPatterns.AbstractFactory.Tables.Text.TextTableFactory = TextTableFactory;
})(this);