(function(global) {
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
})(this);