(function(global) {
	'use strict';

	function BadMethodCallException(message) {
		this.message = message;
		this.name = "BadMethodCallException";
	}

	global.DesignPatterns.State.Utilities.BadMethodCallException = BadMethodCallException;
})(this);