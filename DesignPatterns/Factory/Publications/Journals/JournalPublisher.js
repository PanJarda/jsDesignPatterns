(function(global) {
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
