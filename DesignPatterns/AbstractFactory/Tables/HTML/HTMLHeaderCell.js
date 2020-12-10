(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractHeaderCell = Tables.AbstractHeaderCell;
	
	function HTMLHeaderCell(content) {
		AbstractHeaderCell.call(this, content);
	}

	HTMLHeaderCell.prototype = Object.create(AbstractHeaderCell.prototype);

	HTMLHeaderCell.prototype.constructor = HTMLHeaderCell;

	HTMLHeaderCell.prototype.show = function() {
		var td = document.createElement('th');
		var contentTextNode = document.createTextNode(this.content);
		td.appendChild(contentTextNode);

		this.contentTextNode = contentTextNode;
		
		return td;
	};

	HTMLHeaderCell.prototype.setContent = function(content) {
		this.content = content;
		this.contentTextNode.textContent = content;
	};

	Tables.HTML.HTMLHeaderCell = HTMLHeaderCell;
})(this);