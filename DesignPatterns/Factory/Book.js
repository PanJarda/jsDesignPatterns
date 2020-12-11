(function(global) {
	'use strict';

	var Factory = global.DesignPatterns.Factory;
	var AbstractPublication = Factory.AbstractPublication;

	function Book(category, pageCount) {
		AbstractPublication.call(this, category, pageCount);
	}

	Book.prototype = Object.create(AbstractPublication.prototype);
	
	Book.prototype.constructor = Book;

	Factory.Book = Book;
	
})(this);