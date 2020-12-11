(function(global) {
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
