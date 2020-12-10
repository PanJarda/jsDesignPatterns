(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractTable = Tables.AbstractTable;

	function TextTable(caption) {
		AbstractTable.call(this, caption);
	}

	TextTable.prototype = Object.create(AbstractTable.prototype);
	
	TextTable.prototype.constructor = TextTable;

	TextTable.prototype.show = function() {
		console.log(this.caption + ':');

		this.header.show();
		
		var rowCount = this.rows.length;
		for (var i = 0; i < rowCount; i++) {
			this.rows[i].show();
		}
	};

	Tables.Text.TextTable = TextTable;
})(this);