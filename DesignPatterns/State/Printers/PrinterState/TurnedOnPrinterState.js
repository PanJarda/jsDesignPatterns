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
    throw new BadMethodCallException("Printer has already been plugged in!");
  };

  TurnedOnPrinterState.prototype.turnOn = function() {
    throw new BadMethodCallException("Printer has already been turned on!");
  };

  TurnedOnPrinterState.prototype.warmUp = function() {
    this.printer.setState(this.printer.states.WARMED_UP);
    console.log("Printer warmed up.");
  };

  TurnedOnPrinterState.prototype.turnOff = function() {
    this.printer.setState(this.printer.states.PLUGED_IN);
    console.log("Printer turned off");
  };

  TurnedOnPrinterState.prototype.unplug = function() {
    throw new BadMethodCallException("Printer is still turned on!");
  };

  PrinterState.TurnedOnPrinterState = TurnedOnPrinterState;
})(this);