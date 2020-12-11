(function(global) {
	'use strict';

	var Publications = global.DesignPatterns.Factory.Publications;
	var AbstractPublication = Publications.AbstractPublication;

	function Book(category, pageCount) {
		AbstractPublication.call(this, category, pageCount);
	}

	Book.prototype = Object.create(AbstractPublication.prototype);
	
	Book.prototype.constructor = Book;

	Publications.Books.Book = Book;
	
})(this);