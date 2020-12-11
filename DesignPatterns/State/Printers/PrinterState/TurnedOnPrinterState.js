(function(global) {
	'use strict';

	var PrinterState = global.DesignPatterns.State.Printers.PrinterState;
	var AbstractPrinterState = PrinterState.AbstractPrinterState;
	var BadMethodCallException = global.DesignPatterns.State.Utilities.BadMethodCallException;

	function TurnedOnPrinterState(printer) {
		AbstractPrinterState.call(this, printer);
	}

	TurnedOnPrinterState.prototype = Object.create(AbstractPrinterState.prototype);

	TurnedOnPrinterState.prototype.constructor = TurnedOnPrinterState;

	TurnedOnPrinterState.prototype.plugIn = function() {
		throw new BadMethodCallException("Tiskárna již byla zapojena!");
	};

	TurnedOnPrinterState.prototype.turnOn = function() {
		throw new BadMethodCallException("Tiskárna již byla zapnuta!");
	};

	TurnedOnPrinterState.prototype.warmUp = function() {
		this.printer.setState(this.printer.states.WARMED_UP);
		console.log("Tiskárna rozehřáta.");
	};

	TurnedOnPrinterState.prototype.turnOff = function() {
		this.printer.setState(this.printer.states.PLUGED_IN);
		console.log("Tiskárna vypnuta.");
	};

	TurnedOnPrinterState.prototype.unplug = function() {
		throw new BadMethodCallException("Tiskárna je stále zapnutá!");
	};

	PrinterState.TurnedOnPrinterState = TurnedOnPrinterState;
})(this);