(function(global) {
	'use strict';

	var PrinterState = global.DesignPatterns.State.Printers.PrinterState;
	var AbstractPrinterState = PrinterState.AbstractPrinterState;
	var BadMethodCallException = global.DesignPatterns.State.Utilities.BadMethodCallException;

	function PlugedInPrinterState(printer) {
		AbstractPrinterState.call(this, printer);
	}

	PlugedInPrinterState.prototype = Object.create(AbstractPrinterState.prototype);

	PlugedInPrinterState.prototype.constructor = PlugedInPrinterState;

	PlugedInPrinterState.prototype.plugIn = function() {
		throw new BadMethodCallException("Tiskárna již byla zapojena!");
	};

	PlugedInPrinterState.prototype.turnOn = function() {
		this.printer.setState(this.printer.states.TURNED_ON);
		console.log("Tiskárna zapnuta.");
	};

	PlugedInPrinterState.prototype.warmUp = function() {
		throw new BadMethodCallException("Tiskárna nebyla zapnuta!");
	};

	PlugedInPrinterState.prototype.turnOff = function() {
		throw new BadMethodCallException("Tiskárna nebyla zapnuta!");
	};

	PlugedInPrinterState.prototype.unplug = function() {
		this.printer.setState(this.printer.states.OFFLINE);
		console.log("Tiskárna odpojena.");
	};

	PrinterState.PlugedInPrinterState = PlugedInPrinterState;
})(this);