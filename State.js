/**
 *
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2014  Jaroslav Pernica
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

"use strict"

var DesignPatterns = DesignPatterns || {};

// depends on Utils.js
DesignPatterns.State = (function() {

  var Printers = (function() {

    var BadMethodCallException = this.parent.Utils.BadMethodCallException;

    function PrinterState(printer) {
      this.printer = printer;
    }


    function OfflinePrinterState(printer) {
      PrinterState.call(this, printer);
    }

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



    function PlugedInPrinterState(printer) {
      PrinterState.call(this, printer);
    }

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



    function TurnedOnPrinterState(printer) {
      PrinterState.call(this, printer);
    }

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



    function WarmedUpPrinterState(printer) {
      PrinterState.call(this, printer);
    }

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

    return {
      Printer: Printer
    };
  }).call({ parent: this });

  var Test = {}

  Test.run = function() {
    var printer = new Printers.Printer("HP LaserJet 10000");

    printer.plugIn()
      .turnOn()
      .warmUp()
      .turnOff()
      .unplug();
  };

  return {
    Printer: Printers.Printer,
    Test: Test
  };
}).call(DesignPatterns);

/* test */
//DesignPatterns.State.Test.run();
