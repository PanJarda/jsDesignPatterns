(function(global) {
	'use strict';

	var Factory = global.DesignPatterns.Factory;
	var AbstractPublisher = Factory.AbstractPublisher;
	var Journal = Factory.Journal;

	function JournalPublisher() {
		AbstractPublisher.apply(this, arguments);
	}

	JournalPublisher.prototype = Object.create(AbstractPublisher.prototype);
	
	JournalPublisher.prototype.constructor = JournalPublisher;

	JournalPublisher.prototype.createPublication = function(pageCount) {
		var publication = new Journal(this.category, pageCount);
		return publication;
	};

	Factory.JournalPublisher = JournalPublisher;
})(this);
