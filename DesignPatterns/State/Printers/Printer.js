(function(global) {
  'use strict';

  var Printers = global.DesignPatterns.State.Printers;
  var PrinterState = Printers.PrinterState;
  var OfflinePrinterState = PrinterState.OfflinePrinterState;
  var PlugedInPrinterState = PrinterState.PlugedInPrinterState;
  var TurnedOnPrinterState = PrinterState.TurnedOnPrinterState;
  var WarmedUpPrinterState = PrinterState.WarmedUpPrinterState;

  function Printer(type) {
    this.states = {
      OFFLINE: new OfflinePrinterState(this),
      PLUGED_IN: new PlugedInPrinterState(this),
      TURNED_ON: new TurnedOnPrinterState(this),
      WARMED_UP: new WarmedUpPrinterState(this)
    };
    this.state = this.states.OFFLINE;
    this.type = type;
  }

  Printer.prototype.plugIn = function() {
    this.state.plugIn();
    return this;
  };

  Printer.prototype.turnOn = function() {
    this.state.turnOn();
    return this;
  };

  Printer.prototype.warmUp = function() {
    this.state.warmUp();
    return this;
  };

  Printer.prototype.turnOff = function() {
    this.state.turnOff();
    return this;
  };

  Printer.prototype.unplug = function() {
    this.state.unplug();
    return this;
  };

  Printer.prototype.getType = function() {
    return this.type;
  };

  Printer.prototype.setState = function(state) {
    this.state = state;
    return this;
  };

  Printers.Printer = Printer;
})(this);