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
    throw new BadMethodCallException("Printer has already been plugged in!");
  };

  WarmedUpPrinterState.prototype.turnOn = function() {
    throw new BadMethodCallException("Printer has already been turned on!");
  };

  WarmedUpPrinterState.prototype.warmUp = function() {
    throw new BadMethodCallException("Printer has already been warmed up!");
  };

  WarmedUpPrinterState.prototype.turnOff = function() {
    this.printer.setState(this.printer.states.PLUGED_IN);
    console.log("Printer turned off");
  };

  WarmedUpPrinterState.prototype.unplug = function() {
    throw new BadMethodCallException("Printer is still turned on!");
  };


  PrinterState.WarmedUpPrinterState = WarmedUpPrinterState;
})(this);