(function(global) {
  'use strict';

  function AbstractPrinterState(printer) {
    this.printer = printer;
  }

  global.DesignPatterns.State.Printers.PrinterState.AbstractPrinterState = AbstractPrinterState;
})(this);