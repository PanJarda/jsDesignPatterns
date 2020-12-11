(function(global) {
	'use strict';

	global.DesignPatterns = {};
})(this);(function(global) {
	'use strict';
	global.DesignPatterns.Factory = {};
})(this);(function(global) {
	'use strict';
	global.DesignPatterns.Factory.Publications = {};
})(this);(function(global) {
	'use strict';

	function AbstractPublication(category, pageCount) {
		this.category = category;
		this.pageCount = pageCount;
		this.pageNumber;
	}

	AbstractPublication.prototype.open = function() {};

	AbstractPublication.prototype.close = function() {};

	AbstractPublication.prototype.setPageNumber = function(pageNumber) {
		this.pageNumber = pageNumber;
	};

	global.DesignPatterns.Factory.Publications.AbstractPublication = AbstractPublication;
})(this);
(function(global) {
	'use strict';

	function AbstractPublisher(category) {
		this.category = category;
	}

	AbstractPublisher.prototype.sellPublication = function(pageCount) {
		var publication = this.createPublication(pageCount);
		publication.open();

		var page = Math.floor(Math.random() * pageCount);
		publication.setPageNumber(page);

		publication.close();

		return publication;
	};

	global.DesignPatterns.Factory.Publications.AbstractPublisher = AbstractPublisher;
})(this);
(function(global) {
	'use strict';
	global.DesignPatterns.Factory.Publications.Books = {};
})(this);(function(global) {
	'use strict';

	var Publications = global.DesignPatterns.Factory.Publications;
	var AbstractPublication = Publications.AbstractPublication;

	function Book(category, pageCount) {
		AbstractPublication.call(this, category, pageCount);
	}

	Book.prototype = Object.create(AbstractPublication.prototype);
	
	Book.prototype.constructor = Book;

	Publications.Books.Book = Book;
	
})(this);(function(global) {
	'use strict';

	var Publications = global.DesignPatterns.Factory.Publications;
	var AbstractPublisher = Publications.AbstractPublisher;
	var Book = Publications.Books.Book;

	function BookPublisher(category) {
		AbstractPublisher.call(this, category);
	}

	BookPublisher.prototype = Object.create(AbstractPublisher.prototype);
	
	BookPublisher.prototype.constructor = BookPublisher;

	BookPublisher.prototype.createPublication = function(pageCount) {
		var publication = new Book(this.category, pageCount);
		return publication;
	};

	Publications.Books.BookPublisher = BookPublisher;
})(this);
(function(global) {
	'use strict';
	global.DesignPatterns.Factory.Publications.Journals = {};
})(this);(function(global) {
	'use strict';

	var Publications = global.DesignPatterns.Factory.Publications;
	var AbstractPublication = Publications.AbstractPublication;

	function Journal(category, pageCount) {
		AbstractPublication.call(this, category, pageCount);
	}

	Journal.prototype = Object.create(AbstractPublication.prototype);
	
	Journal.prototype.constructor = Journal;

	Publications.Journals.Journal = Journal;
	
})(this);(function(global) {
	'use strict';

	var Publications = global.DesignPatterns.Factory.Publications;
	var AbstractPublisher = Publications.AbstractPublisher;
	var Journal = Publications.Journals.Journal;

	function JournalPublisher() {
		AbstractPublisher.apply(this, arguments);
	}

	JournalPublisher.prototype = Object.create(AbstractPublisher.prototype);
	
	JournalPublisher.prototype.constructor = JournalPublisher;

	JournalPublisher.prototype.createPublication = function(pageCount) {
		var publication = new Journal(this.category, pageCount);
		return publication;
	};

	Publications.Journals.JournalPublisher = JournalPublisher;
})(this);
(function(global) {
	'use strict';
	var Factory =  global.DesignPatterns.Factory;
	var Publications = Factory.Publications;
	var BookPublisher = Publications.Books.BookPublisher;
	var JournalPublisher = Publications.Journals.JournalPublisher;

	function run() {
		var bookPublisher = new BookPublisher('PC');

		var book = bookPublisher.sellPublication(100);
		
		console.log(book.constructor.name, book.category, book.pageCount, book.pageNumber);

		var journalPublisher = new JournalPublisher('FF');

		var journal = journalPublisher.sellPublication(210);

		console.log(journal.constructor.name, journal.category, journal.pageCount, journal.pageNumber);
	}

	Factory.Test = {
		run: run
	};
})(this);(function() {
	'use strict';
	window.addEventListener('DOMContentLoaded', DesignPatterns.Factory.Test.run);
})();