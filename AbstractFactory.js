(function(global) {
	'use strict';
	
	var DesignPatterns = (global.DesignPatterns = global.DesignPatterns || {});

	DesignPatterns.AbstractFactory = (function() {

		function UnimplementedAbstractMethodCallException() {
			this.name = 'UnimplementedAbstractMethodCallException';
		}

		function InstantiationException() {
			this.name = 'InstantiationException';
		}

		var Tables = (function() {
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
	
	
			function AbstractCell(content) {
				if (this.constructor === AbstractCell) {
					throw new InstantiationException();
				}
				this.content = content;
			}
	
			AbstractCell.prototype.show = function() {
				throw new UnimplementedAbstractMethodCallException();
			};
	
	
			function AbstractHeader() {
				if (this.constructor === AbstractHeader) {
					throw new InstantiationException();
				}
				AbstractRow.call(this);
			}
	
			AbstractHeader.prototype = Object.create(AbstractRow.prototype);
	
			AbstractHeader.prototype.constructor = AbstractHeader;

			var HTML = (function() {
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

				return {
					HTMLTable: HTMLTable,
					HTMLCell: HTMLCell,
					HTMLRow: HTMLRow,
					HTMLHeader: HTMLHeader,
					HTMLTableFactory: HTMLTableFactory
				};
			})();

			var Text = (function() {

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

				
				function TextCell(content) {
					AbstractCell.call(this, content);
				}

				TextCell.prototype = Object.create(AbstractCell.prototype);

				TextCell.prototype.constructor = TextCell;

				TextCell.prototype.show = function() {
					return this.content;
				};


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

				return {
					TextTableFactory: TextTableFactory
				};
			})();

			var Utilities = (function() {

				function PublicationList(tableFactory) {
					this.tableFactory = tableFactory;
				}

				PublicationList.prototype.displayTable = function(data) {
					var factory = this.tableFactory;
					var table = factory.createTable('Publication list');
					var header = factory.createHeader();
					
					header.addCell(factory.createCell('Category'));
					header.addCell(factory.createCell('Page count'));
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

				return {
					PublicationList: PublicationList
				}
			})();

			return {
				AbstractCell: AbstractCell,
				AbstractHeader: AbstractHeader,
				AbstractTable: AbstractTable,
				AbstractRow: AbstractRow,
				HTML: HTML,
				Text: Text,
				Utilities: Utilities
			};
		})();
	

		var Test = {
			run: function() {
				var publications = [
					['PC', 100],
					['PC', 380],
					['medicine', 250],
					['history', 70]
				];
				var htmlTableFactory = new Tables.HTML.HTMLTableFactory(document.body);
				var publicationList = new Tables.Utilities.PublicationList(htmlTableFactory);
				publicationList.displayTable(publications);

				var textTableFactory = new Tables.Text.TextTableFactory();
				publicationList.setTableFactory(textTableFactory);
				publicationList.displayTable(publications);
			}
		};
		
		return {
			Test: Test
		};
	})();

	window.addEventListener('DOMContentLoaded', DesignPatterns.AbstractFactory.Test.run);
})(this);

