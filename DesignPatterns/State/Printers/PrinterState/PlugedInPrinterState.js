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
    throw new BadMethodCallException("Printer has already been plugged in!");
  };

  PlugedInPrinterState.prototype.turnOn = function() {
    this.printer.setState(this.printer.states.TURNED_ON);
    console.log("Printer turned on.");
  };

  PlugedInPrinterState.prototype.warmUp = function() {
    throw new BadMethodCallException("Printer has not been turned on!");
  };

  PlugedInPrinterState.prototype.turnOff = function() {
    throw new BadMethodCallException("Printer has not been turned on!");
  };

  PlugedInPrinterState.prototype.unplug = function() {
    this.printer.setState(this.printer.states.OFFLINE);
    console.log("Printer unplugged.");
  };

  PrinterState.PlugedInPrinterState = PlugedInPrinterState;
})(this);