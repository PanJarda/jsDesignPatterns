(function(global) {
	'use strict';

	var AbstractHeader = global.DesignPatterns.AbstractFactory.Tables.AbstractHeader;

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

	global.DesignPatterns.AbstractFactory.Tables.HTML.HTMLHeader = HTMLHeader;
})(this);