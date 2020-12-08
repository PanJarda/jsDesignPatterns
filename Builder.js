"use strict";

var DesignPatterns = DesignPatterns || {};

DesignPatterns.Builder = (function(document) {

	function Component(text) {
		this.text = text;
		var div = document.createElement('div'),
		textContent = document.createTextNode(text);
		div.appendChild(textContent);
		this.DOMRoot = div;
	}

	Component.prototype.update = function() {
		this.DOMRoot.textContent = this.text;
	}

	var Buttons = (function() {
		function ButtonState(button) {
			this.button = button;
		}
	
		function StartButtonState(button, StopState) {
			ButtonState.call(this, button);
			this.text = 'Start';
			this.stopState = new StopState(button, this);
		}
	
		StartButtonState.prototype.toggleState = function() {
			this.button.state = this.stopState;
		};
	
		function StopButtonState(button, startState) {
			ButtonState.call(this, button);
			this.startState = startState;
			this.text = 'Stop';
		}
	
		StopButtonState.prototype.toggleState = function() {
			this.button.state = this.startState;
		};
	
		function Button(StartButtonState, StopButtonState) {
			this.state = new StartButtonState(this, StopButtonState);
			this.DOMRoot = document.createElement('button');
			this._textContent = document.createTextNode(this.text || '');
			this.DOMRoot.appendChild(this._textContent);
			this.DOMRoot.addEventListener('click', this.toggleState.bind(this));
			this._updateDOM();
		}
	
		Button.prototype._updateDOM = function() {
			this._textContent.textContent = this.state.text;
			return this.DOMRoot;
		};
	
		Button.prototype.toggleState = function() {
			this.state.toggleState();
			this._updateDOM();
		};
	
		Button.prototype.addEventListener = function(event, handler) {
			this.DOMRoot.addEventListener(event, handler.bind(this));
		};


		function ColoredStartButtonState(button, ColoredStopButtonState) {
			this._color = 'green';
			StartButtonState.call(this, button, ColoredStopButtonState);
		}

		ColoredStartButtonState.prototype = Object.create(StartButtonState.prototype);

		function ColoredStopButtonState(button, startState) {
			this._color = 'red';
			StopButtonState.call(this, button, startState);
		}

		ColoredStopButtonState.prototype = Object.create(StopButtonState.prototype);

		function ColoredButton() {
			Button.call(this, ColoredStartButtonState, ColoredStopButtonState);
		}

		ColoredButton.prototype = Object.create(Button.prototype);

		ColoredButton.prototype._updateDOM = function() {
			Button.prototype._updateDOM.call(this);
			this.DOMRoot.className = 'u-' + this.state._color;
		}

		return {
			ColoredButton: ColoredButton,
			Button
		};
	})();

	function ButtonFactory(type) {
		this.type = type;
	}

	ButtonFactory.prototype.createButton = function() {
		var button = new this.type();
		return button;
	}

	function App(Component, buttonFactory) {
		this.Component = Component;
		this.buttonFactory = buttonFactory;
		this.iterator = 0;

		var DOMRoot = document.createElement('div'),
		button = this.buttonFactory.createButton(),
		component = new this.Component(this.iterator.toString());

		button.addEventListener('click', this.handleClick.bind(this));

		DOMRoot.appendChild(component.DOMRoot);
		DOMRoot.appendChild(button.DOMRoot);
		
		this.button = button;
		this.component = component;
		this.DOMRoot = DOMRoot;
	}
	
	App.prototype.incrementIterator = function() {
		this.iterator++;
		var component = this.component;
		component.text = this.iterator.toString();
		component.update();
	};

	App.prototype.handleClick = function() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		} else {
			this.intervalId = setInterval(this.incrementIterator.bind(this), 10);
		}
	};

	var Test = (function() {
		function run() {
			var app = new App(Component, new ButtonFactory(Buttons.ColoredButton));
			document.body.appendChild(app.DOMRoot);
		}

		return {
			run: run
		};
	})();

	return {
		Component: Component,
		Buttons: Buttons,
		App: App,
		ButtonFactory: ButtonFactory,
		Test: Test
	};

}).call(DesignPatterns, document);