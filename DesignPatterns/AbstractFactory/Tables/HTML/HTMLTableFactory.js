(function(global) {
	'use strict';

	var HTML = global.DesignPatterns.AbstractFactory.Tables.HTML;
	var HTMLCell = HTML.HTMLCell;
	var HTMLHeaderCell = HTML.HTMLHeaderCell;
	var HTMLTable = HTML.HTMLTable;
	var HTMLRow = HTML.HTMLRow;
	var HTMLHeader = HTML.HTMLHeader;

	function HTMLTableFactory(htmlRoot) {
		this.htmlRoot = htmlRoot;
	}

	HTMLTableFactory.prototype.createCell = function(content) {
		return new HTMLCell(content);
	};

	HTMLTableFactory.prototype.createHeaderCell = function(content) {
		return new HTMLHeaderCell(content);
	};

	HTMLTableFactory.prototype.createRow = function() {
		return new HTMLRow();
	};

	HTMLTableFactory.prototype.createTable = function(caption) {
		return new HTMLTable(caption, this.htmlRoot);
	};

	HTMLTableFactory.prototype.createHeader = function() {
		return new HTMLHeader();
	};

	global.DesignPatterns.AbstractFactory.Tables.HTML.HTMLTableFactory = HTMLTableFactory;

})(this);