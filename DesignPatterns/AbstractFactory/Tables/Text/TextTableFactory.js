(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables
	var Text = Tables.Text;
	var TextCell = Text.TextCell;
	var TextHeaderCell = Text.TextHeaderCell;
	var TextTable = Text.TextTable;
	var TextRow = Text.TextRow;
	var TextHeader = Text.TextHeader;

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

	TextTableFactory.prototype.createHeaderCell = function(content) {
		return new TextHeaderCell(content);
	};

	TextTableFactory.prototype.createHeader = function() {
		return new TextHeader();
	};

	global.DesignPatterns.AbstractFactory.Tables.Text.TextTableFactory = TextTableFactory;
})(this);