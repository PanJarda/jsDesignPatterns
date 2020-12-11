(function(global) {
	'use strict';

	global.DesignPatterns = {};
})(this);(function(global) {
	'use strict';
	global.DesignPatterns.State = {};
})(this);(function(global) {
	'use strict';
	global.DesignPatterns.State.Utilities = {};
})(this);(function(global) {
	'use strict';

	function BadMethodCallException(message) {
		this.message = message;
		this.name = "BadMethodCallException";
	}

	global.DesignPatterns.State.Utilities.BadMethodCallException = BadMethodCallException;
})(this);(function(global) {
	'use strict';
	global.DesignPatterns.State.Printers = {};
})(this);(function(global) {
	'use strict';

	global.DesignPatterns.State.Printers.PrinterState = {};
})(this);(function(global) {
	'use strict';

	function AbstractPrinterState(printer) {
		this.printer = printer;
	}

	global.DesignPatterns.State.Printers.PrinterState.AbstractPrinterState = AbstractPrinterState;
})(this);(function(global) {
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

	PrinterState.OfflinePrinterState = OfflinePrinterState;
})(this);(function(global) {
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

	PrinterState.PlugedInPrinterState = PlugedInPrinterState;
})(this);(function(global) {
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
})(this);(function(global) {
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
})(this);(function(global) {
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
})(this);(function(global) {
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
})(this);(function() {
	'use strict';
	window.addEventListener('DOMContentLoaded', DesignPatterns.State.Test.run);
})();