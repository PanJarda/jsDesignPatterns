(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractTable = Tables.AbstractTable;

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

	Tables.HTML.HTMLTable = HTMLTable;
})(this);