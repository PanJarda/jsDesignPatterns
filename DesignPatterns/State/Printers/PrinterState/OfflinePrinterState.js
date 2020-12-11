(function(global) {
	'use strict';

	var PrinterState = global.DesignPatterns.State.Printers.PrinterState;
	var AbstractPrinterState = PrinterState.AbstractPrinterState;
	var BadMethodCallException = global.DesignPatterns.State.Utilities.BadMethodCallException;

	function OfflinePrinterState(printer) {
		AbstractPrinterState.call(this, printer);
	}

	OfflinePrinterState.prototype = Object.create(AbstractPrinterState.prototype);

	OfflinePrinterState.prototype.constructor = OfflinePrinterState;

	OfflinePrinterState.prototype.plugIn = function() {
		this.printer.setState(this.printer.states.PLUGED_IN);
		console.log("Tiskárna zapojena do sítě.");
	};

	OfflinePrinterState.prototype.turnOn = function() {
		throw new BadMethodCallException("Tiskárna nebyla zapojena!");
	};

	OfflinePrinterState.prototype.warmUp = function() {
		throw new BadMethodCallException("Tiskárna nebyla zapnuta!");
	};

	OfflinePrinterState.prototype.turnOff = function() {
		throw new BadMethodCallException("Tiskárna nebyla zapnuta!");
	};

	OfflinePrinterState.prototype.unplug = function() {
		throw new BadMethodCallException("Tiskárna nebyla zapojena!");
	};

	PrinterState.OfflinePrinterState = OfflinePrinterState;
})(this);