(function(global) {
	'use strict';

	var PrinterState = global.DesignPatterns.State.Printers.PrinterState;
	var AbstractPrinterState = PrinterState.AbstractPrinterState;
	var BadMethodCallException = global.DesignPatterns.State.Utilities.BadMethodCallException;

	function WarmedUpPrinterState(printer) {
		AbstractPrinterState.call(this, printer);
	}

	WarmedUpPrinterState.prototype = Object.create(AbstractPrinterState.prototype);

	WarmedUpPrinterState.prototype.constructor = WarmedUpPrinterState;

	WarmedUpPrinterState.prototype.plugIn = function() {
		throw new BadMethodCallException("Tiskárna již byla zapojena!");
	};

	WarmedUpPrinterState.prototype.turnOn = function() {
		throw new BadMethodCallException("Tiskárna již byla zapnuta!");
	};

	WarmedUpPrinterState.prototype.warmUp = function() {
		throw new BadMethodCallException("Tiskárna již byla rozehřáta!");
	};

	WarmedUpPrinterState.prototype.turnOff = function() {
		this.printer.setState(this.printer.states.PLUGED_IN);
		console.log("Tiskárna vypnuta.");
	};

	WarmedUpPrinterState.prototype.unplug = function() {
		throw new BadMethodCallException("Tiskárna je stále zapnutá!");
	};


	PrinterState.WarmedUpPrinterState = WarmedUpPrinterState;
})(this);