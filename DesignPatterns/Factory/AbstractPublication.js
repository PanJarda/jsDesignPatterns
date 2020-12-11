(function(global) {
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

	global.DesignPatterns.Factory.AbstractPublication = AbstractPublication;
})(this)
