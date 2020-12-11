(function(global) {
	'use strict';

	var Factory = global.DesignPatterns.Factory;
	var AbstractPublication = Factory.AbstractPublication;

	function Journal(category, pageCount) {
		AbstractPublication.call(this, category, pageCount);
	}

	Journal.prototype = Object.create(AbstractPublication.prototype);
	
	Journal.prototype.constructor = Journal;

	Factory.Journal = Journal;
	
})(this);