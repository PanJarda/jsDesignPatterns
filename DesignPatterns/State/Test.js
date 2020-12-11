(function(global) {
  'use strict';

  var State = global.DesignPatterns.State;
  var Printer = State.Printers.Printer;

  function run() {
    var printer = new Printer("HP LaserJet 10000");

    printer.plugIn()
      .turnOn()
      .warmUp()
      .turnOff()
      .unplug();
  }

  State.Test = {
    run: run
  };
})(this);