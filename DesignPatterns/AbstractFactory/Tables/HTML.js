(function(global) {
	'use strict';
	
	var Tables = global.DesignPatterns.AbstractFactory.Tables
	var AbstractCell = Tables.AbstractCell;
	var AbstractHeader = Tables.AbstractHeader;
	var AbstractRow = Tables.AbstractRow;
	var AbstractTable = Tables.AbstractTable;

	function HTMLCell(content) {
		AbstractCell.call(this, content);
	}

	HTMLCell.prototype = Object.create(AbstractCell.prototype);
	
	HTMLCell.prototype.constructor = HTMLCell;

	HTMLCell.prototype.show = function() {
		var td = document.createElement('td');
		var contentTextNode = document.createTextNode(this.content);
		td.appendChild(contentTextNode);

		this.contentTextNode = contentTextNode;
		
		return td;
	};

	HTMLCell.prototype.setContent = function(content) {
		this.content = content;
		this.contentTextNode.textContent = content;
	};


	function HTMLRow() {
		AbstractRow.call(this);
	}

	HTMLRow.prototype = Object.create(AbstractRow.prototype);
	
	HTMLRow.prototype.constructor = HTMLRow;

	HTMLRow.prototype.show = function() {
		var tr = document.createElement('tr');
		var cells = this.cells;
		var N = cells.length;

		for (var i = 0; i < N; i++) {
			tr.appendChild(cells[i].show());
		}
		
		return tr;
	};


	function HTMLTable(caption, HTMLRoot) {
		AbstractTable.call(this, caption);
		this.HTMLRoot = HTMLRoot;
	}

	HTMLTable.prototype = Object.create(AbstractTable.prototype);
	
	HTMLTable.prototype.constructor = HTMLTable;

	HTMLTable.prototype.show = function() {
		var table = document.createElement('table');
		table.border = 1;
		
		var caption = document.createElement('caption');
		var captionTextNode = document.createTextNode(this.caption);
		caption.appendChild(captionTextNode);
		table.appendChild(caption);

		table.appendChild(this.header.show());

		var rows = this.rows;
		var N = rows.length;
		var tbody = document.createElement('tbody');

		for (var i = 0; i < N; i++) {
			tbody.appendChild(rows[i].show());
		}

		table.appendChild(tbody);

		this.HTMLRoot.appendChild(table);
	};


	function HTMLHeader() {
		AbstractHeader.call(this);
	}

	HTMLHeader.prototype = Object.create(AbstractHeader.prototype);

	HTMLHeader.prototype.constructor = HTMLHeader;

	HTMLHeader.prototype.show = function() {
		var header = document.createElement('thead');
		var tr = document.createElement('tr');
		var cells = this.cells;
		var N = this.cells.length;
		
		for (var i = 0; i < N; i++) {
			tr.appendChild(cells[i].show());
		}

		header.appendChild(tr);

		return header;
	};

	function HTMLTableFactory(htmlRoot) {
		this.htmlRoot = htmlRoot;
	}

	HTMLTableFactory.prototype.createCell = function(content) {
		return new HTMLCell(content);
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

	global.DesignPatterns.AbstractFactory.Tables.HTML = {
		HTMLTable: HTMLTable,
		HTMLCell: HTMLCell,
		HTMLRow: HTMLRow,
		HTMLHeader: HTMLHeader,
		HTMLTableFactory: HTMLTableFactory
	};
})(this);