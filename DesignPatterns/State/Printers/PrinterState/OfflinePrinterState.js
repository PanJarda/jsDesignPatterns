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
    console.log("Printer plugged in to network.");
  };

  OfflinePrinterState.prototype.turnOn = function() {
    throw new BadMethodCallException("Printer has already been plugged in!");
  };

  OfflinePrinterState.prototype.warmUp = function() {
    throw new BadMethodCallException("Printer has not been turned on!");
  };

  OfflinePrinterState.prototype.turnOff = function() {
    throw new BadMethodCallException("Printer has not been turned on!");
  };

  OfflinePrinterState.prototype.unplug = function() {
    throw new BadMethodCallException("Printer has not been plugged in!");
  };

  PrinterState.OfflinePrinterState = OfflinePrinterState;
})(this);