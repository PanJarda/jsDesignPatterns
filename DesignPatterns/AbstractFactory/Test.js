(function(global) {
	var Tables = global.DesignPatterns.AbstractFactory.Tables;

	function run() {
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

	global.DesignPatterns.AbstractFactory.Test = {
		run: run
	};
})(this);