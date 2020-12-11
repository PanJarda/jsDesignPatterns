(function(global) {
	'use strict';

	global.DesignPatterns = {};
})(this);(function(global) {
	'use strict';
	
	function UnimplementedAbstractMethodCallException() {
		this.name = 'UnimplementedAbstractMethodCallException';
	}

	function InstantiationException() {
		this.name = 'InstantiationException';
	}

	DesignPatterns.AbstractFactory = {
		UnimplementedAbstractMethodCallException: UnimplementedAbstractMethodCallException,
		InstantiationException: InstantiationException
	};
})(this);

(function(global) {
	'use strict';

	global.DesignPatterns.AbstractFactory.Tables = {};
})(this);(function(global) {
	'use strict';

	var InstantiationException = global.DesignPatterns.AbstractFactory.InstantiationException;
	var UnimplementedAbstractMethodCallException = global.DesignPatterns.AbstractFactory.UnimplementedAbstractMethodCallException;

	function AbstractTable(caption) {
		if (this.constructor === AbstractTable) {
			throw new InstantiationException();
		}
		this.caption = caption;
		this.rows = [];
		this.header = null;
	}

	AbstractTable.prototype.addRow = function(row) {
		this.rows.push(row);
	};

	AbstractTable.prototype.setHeader = function(header) {
		this.header = header;
	}

	AbstractTable.prototype.show = function() {
		throw new UnimplementedAbstractMethodCallException();
	};

	global.DesignPatterns.AbstractFactory.Tables.AbstractTable = AbstractTable;
})(this);(function(global) {
	'use strict';

	var InstantiationException = global.DesignPatterns.AbstractFactory.InstantiationException;
	var UnimplementedAbstractMethodCallException = global.DesignPatterns.AbstractFactory.UnimplementedAbstractMethodCallException;

	function AbstractRow() {
		if (this.constructor === AbstractRow) {
			throw new InstantiationException();
		}
		this.cells = [];
	}

	AbstractRow.prototype.addCell = function(cell) {
		this.cells.push(cell);
	};

	AbstractRow.prototype.show = function() {
		throw new UnimplementedAbstractMethodCallException();
	};

	global.DesignPatterns.AbstractFactory.Tables.AbstractRow = AbstractRow;
})(this);(function(global) {
	'use strict';
	var AbstractFactory = global.DesignPatterns.AbstractFactory;
	var InstantiationException = AbstractFactory.InstantiationException;
	var UnimplementedAbstractMethodCallException = AbstractFactory.UnimplementedAbstractMethodCallException;

	function AbstractCell(content) {
		if (this.constructor === AbstractCell) {
			throw new InstantiationException();
		}
		this.content = content;
	}

	AbstractCell.prototype.show = function() {
		throw new UnimplementedAbstractMethodCallException();
	};

	AbstractFactory.Tables.AbstractCell = AbstractCell;
})(this);(function(global) {
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
})(this);(function(global) {
	'use strict';

	var InstantiationException = global.DesignPatterns.AbstractFactory.InstantiationException;
	var UnimplementedAbstractMethodCallException = global.DesignPatterns.AbstractFactory.UnimplementedAbstractMethodCallException;

	function AbstractHeaderCell(content) {
		if (this.constructor === AbstractHeaderCell) {
			throw new InstantiationException();
		}
		this.content = content;
	}

	AbstractHeaderCell.prototype.show = function() {
		throw new UnimplementedAbstractMethodCallException();
	};

	global.DesignPatterns.AbstractFactory.Tables.AbstractHeaderCell = AbstractHeaderCell;
})(this);(function(global) {
	'use strict';
	global.DesignPatterns.AbstractFactory.Tables.HTML = {}
})(this);(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractCell = Tables.AbstractCell;
	
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

	Tables.HTML.HTMLCell = HTMLCell;
})(this);(function(global) {
	'use strict';

	var AbstractRow = global.DesignPatterns.AbstractFactory.Tables.AbstractRow;

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

	global.DesignPatterns.AbstractFactory.Tables.HTML.HTMLRow = HTMLRow;
})(this);(function(global) {
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
})(this);(function(global) {
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
})(this);(function(global) {
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
})(this);(function(global) {
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

})(this);(function(global) {
	'use strict';
	global.DesignPatterns.AbstractFactory.Tables.Text = {};
})(this);(function(global) {
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
})(this);(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractCell = Tables.AbstractCell;
	
	function TextCell(content) {
		AbstractCell.call(this, content);
	}

	TextCell.prototype = Object.create(AbstractCell.prototype);

	TextCell.prototype.constructor = TextCell;

	TextCell.prototype.show = function() {
		return this.content;
	};

	Tables.Text.TextCell = TextCell;
})(this);(function(global) {
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
})(this);(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractRow = Tables.AbstractRow;
	
	function TextRow() {
		AbstractRow.call(this);
	}

	TextRow.prototype = Object.create(AbstractRow.prototype);

	TextRow.prototype.constructor = TextRow;

	TextRow.prototype.show = function() {
		var rowBuffer = [];
		var cells = this.cells;
		var N = cells.length;
		for (var i = 0; i < N; i++) {
			rowBuffer.push(cells[i].show());
		}

		console.log(rowBuffer.join(' | '));
	};

	Tables.Text.TextRow = TextRow;
})(this);(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractHeader = Tables.AbstractHeader;
	
	function TextHeader() {
		AbstractHeader.call(this);
	}

	TextHeader.prototype = Object.create(AbstractHeader.prototype);

	TextHeader.prototype.constructor = TextHeader;

	TextHeader.prototype.show = function() {
		var cells = this.cells;
		var N = cells.length;
		var rowBuffer = [];
		for (var i = 0; i < N; i++) {
			rowBuffer.push(cells[i].show());
		}

		console.log(rowBuffer.join(' | '));

		console.log('-----------------');
	};

	Tables.Text.TextHeader = TextHeader;
})(this); (function(global) {
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
})(this);(function(global) {
	'use strict';
	global.DesignPatterns.AbstractFactory.Tables.CSV = {};
})(this);(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractTable = Tables.AbstractTable;

	function CSVTable(caption) {
		AbstractTable.call(this, caption);
	}

	CSVTable.prototype = Object.create(AbstractTable.prototype);
	
	CSVTable.prototype.constructor = CSVTable;

	CSVTable.prototype.show = function() {
		var buffer = '';
		buffer += this.header.show();
		
		var rowCount = this.rows.length;
		for (var i = 0; i < rowCount; i++) {
			buffer += this.rows[i].show();
		}

		console.log(buffer);
	};

	Tables.CSV.CSVTable = CSVTable;
})(this);(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractCell = Tables.AbstractCell;

	function CSVCell(content) {
		AbstractCell.call(this, content);
	}

	CSVCell.prototype = Object.create(AbstractCell.prototype);

	CSVCell.prototype.constructor = CSVCell;

	CSVCell.prototype.show = function() {
		return this.content;
	};

	Tables.CSV.CSVCell = CSVCell;
})(this);(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractHeader = Tables.AbstractHeader;
	
	function CSVHeader() {
		AbstractHeader.call(this);
	}

	CSVHeader.prototype = Object.create(AbstractHeader.prototype);

	CSVHeader.prototype.constructor = CSVHeader;

	CSVHeader.prototype.show = function() {
		var cells = this.cells;
		var N = cells.length;
		var rowBuffer = [];
		for (var i = 0; i < N; i++) {
			rowBuffer.push(cells[i].show());
		}

		return rowBuffer.join(',') + '\n';
	};

	Tables.CSV.CSVHeader = CSVHeader;
})(this); (function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractRow = Tables.AbstractRow;
	
	function CSVRow() {
		AbstractRow.call(this);
	}

	CSVRow.prototype = Object.create(AbstractRow.prototype);

	CSVRow.prototype.constructor = CSVRow;

	CSVRow.prototype.show = function() {
		var rowBuffer = [];
		var cells = this.cells;
		var N = cells.length;
		for (var i = 0; i < N; i++) {
			rowBuffer.push(cells[i].show());
		}

		return rowBuffer.join(',') + '\n';
	};

	Tables.CSV.CSVRow = CSVRow;
})(this);(function(global) {
	'use strict';

	var Tables = global.DesignPatterns.AbstractFactory.Tables;
	var AbstractHeaderCell = Tables.AbstractHeaderCell;
	
	function CSVHeaderCell(content) {
		AbstractHeaderCell.call(this, content);
	}

	CSVHeaderCell.prototype = Object.create(AbstractHeaderCell.prototype);

	CSVHeaderCell.prototype.constructor = CSVHeaderCell;

	CSVHeaderCell.prototype.show = function() {
		return this.content;
	};

	Tables.CSV.CSVHeaderCell = CSVHeaderCell;
})(this);(function(global) {
	'use strict';

	var CSV = global.DesignPatterns.AbstractFactory.Tables.CSV;
	var CSVCell = CSV.CSVCell;
	var CSVHeaderCell = CSV.CSVHeaderCell;
	var CSVTable = CSV.CSVTable;
	var CSVRow = CSV.CSVRow;
	var CSVHeader = CSV.CSVHeader;

	function CSVTableFactory(htmlRoot) {
		this.htmlRoot = htmlRoot;
	}

	CSVTableFactory.prototype.createCell = function(content) {
		return new CSVCell(content);
	};

	CSVTableFactory.prototype.createHeaderCell = function(content) {
		return new CSVHeaderCell(content);
	};

	CSVTableFactory.prototype.createRow = function() {
		return new CSVRow();
	};

	CSVTableFactory.prototype.createTable = function(caption) {
		return new CSVTable(caption, this.htmlRoot);
	};

	CSVTableFactory.prototype.createHeader = function() {
		return new CSVHeader();
	};

	global.DesignPatterns.AbstractFactory.Tables.CSV.CSVTableFactory = CSVTableFactory;

})(this);(function(global) {
	'use strict';

	var CSV = global.DesignPatterns.AbstractFactory.Tables.CSV;
	var CSVCell = CSV.CSVCell;
	var CSVHeaderCell = CSV.CSVHeaderCell;
	var CSVTable = CSV.CSVTable;
	var CSVRow = CSV.CSVRow;
	var CSVHeader = CSV.CSVHeader;

	function CSVTableFactory(htmlRoot) {
		this.htmlRoot = htmlRoot;
	}

	CSVTableFactory.prototype.createCell = function(content) {
		return new CSVCell(content);
	};

	CSVTableFactory.prototype.createHeaderCell = function(content) {
		return new CSVHeaderCell(content);
	};

	CSVTableFactory.prototype.createRow = function() {
		return new CSVRow();
	};

	CSVTableFactory.prototype.createTable = function(caption) {
		return new CSVTable(caption, this.htmlRoot);
	};

	CSVTableFactory.prototype.createHeader = function() {
		return new CSVHeader();
	};

	global.DesignPatterns.AbstractFactory.Tables.CSV.CSVTableFactory = CSVTableFactory;

})(this);(function(global) {
	'use strict';
	global.DesignPatterns.AbstractFactory.Tables.Utilities = {};
})(this);(function(global) {
	'use strict';

	var Utilities = global.DesignPatterns.AbstractFactory.Tables.Utilities;

	function PublicationList(tableFactory) {
		this.tableFactory = tableFactory;
	}

	PublicationList.prototype.displayTable = function(data) {
		var factory = this.tableFactory;
		var table = factory.createTable('Publication list');
		var header = factory.createHeader();
		
		header.addCell(factory.createHeaderCell('Category'));
		header.addCell(factory.createHeaderCell('Page count'));
		header.addCell(factory.createHeaderCell('sd'));
		table.setHeader(header);

		var cell, row;
		var rowCount = data.length;
		for (var i = 0; i < rowCount; i++) {
			row = factory.createRow();
			var dataRow = data[i];
			var fieldCount = dataRow.length;
			for (var j = 0; j < fieldCount; j++) {
				cell = factory.createCell(dataRow[j]);
				row.addCell(cell);
			};
			table.addRow(row);
		}

		return table.show();
	};

	PublicationList.prototype.setTableFactory = function(tableFactory) {
		this.tableFactory = tableFactory;
	};

	Utilities.PublicationList = PublicationList;
})(this);(function(global) {
	var Tables = global.DesignPatterns.AbstractFactory.Tables;

	function run() {
		var publications = [
			['PC', 100, 'fff'],
			['PC', 380, 'fsd'],
			['medicine', 250, 'sdf'],
			['history', 70, 'dffsd']
		];

		var htmlTableFactory = new Tables.HTML.HTMLTableFactory(document.body);
		var publicationList = new Tables.Utilities.PublicationList(htmlTableFactory);
		publicationList.displayTable(publications);

		var textTableFactory = new Tables.Text.TextTableFactory();
		publicationList.setTableFactory(textTableFactory);
		publicationList.displayTable(publications);

		var csvTableFactory = new Tables.CSV.CSVTableFactory();
		publicationList.setTableFactory(csvTableFactory);
		publicationList.displayTable(publications);
	}

	global.DesignPatterns.AbstractFactory.Test = {
		run: run
	};
})(this);(function() {
	'use strict';
	window.addEventListener('DOMContentLoaded', DesignPatterns.AbstractFactory.Test.run);
})();