(function(global) {
	'use strict';

	var Factory = global.DesignPatterns.Factory;
	var AbstractPublisher = Factory.AbstractPublisher;
	var Book = Factory.Book;

	function BookPublisher(category) {
		AbstractPublisher.call(this, category);
	}

	BookPublisher.prototype = Object.create(AbstractPublisher.prototype);
	
	BookPublisher.prototype.constructor = BookPublisher;

	BookPublisher.prototype.createPublication = function(pageCount) {
		var publication = new Book(this.category, pageCount);
		return publication;
	};

	Factory.BookPublisher = BookPublisher;
})(this);
