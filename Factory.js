(function(global) {
	'use strict';
	
	var exports = (global.DesignPatterns = global.DesignPatterns || {});

	exports.Factory = (function() {

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


		function Book(category, pageCount) {
			AbstractPublication.call(this, category, pageCount);
		}

		Book.prototype = Object.create(AbstractPublication.prototype);
		Book.prototype.constructor = Book;


		function Journal(category, pageCount) {
			AbstractPublication.call(this, category, pageCount);
		}

		Journal.prototype = Object.create(AbstractPublication.prototype);
		Journal.prototype.constructor = Journal;

		
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


		function BookPublisher(category) {
			AbstractPublisher.call(this, category);
		}

		BookPublisher.prototype = Object.create(AbstractPublisher.prototype);
		BookPublisher.prototype.constructor = BookPublisher;

		BookPublisher.prototype.createPublication = function(pageCount) {
			var publication = new Book(this.category, pageCount);
			return publication;
		};

		
		function JournalPublisher() {
			AbstractPublisher.apply(this, arguments);
		}

		JournalPublisher.prototype = Object.create(AbstractPublisher.prototype);
		JournalPublisher.prototype.constructor = JournalPublisher;

		JournalPublisher.prototype.createPublication = function(pageCount) {
			var publication = new Journal(this.category, pageCount);
			return publication;
		};


		var Test = {
			run: function() {
				var bookPublisher = new BookPublisher('PC');
				var book = bookPublisher.sellPublication(100);

				console.log(book);
			}
		};
		
		return {
			Test: Test
		};
	})();
})(this);

this.DesignPatterns.Factory.Test.run();