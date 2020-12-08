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

 "use strict";

var DesignPatterns = DesignPatterns || {};

DesignPatterns.Builder = (function(document) {

	function Component(text) {
		this.text = text;
		this.root;
	}

	Component.prototype.render = function() {
		var div = document.createElement('div'),
		textContent = document.createTextNode(this.text);
		div.appendChild(textContent);
		return this.root = div;
	};

	Component.prototype.update = function() {
		this.root.textContent = this.text;
	}

	var Button = (function() {
		function ButtonState(button) {
			this.button = button;
		}
	
		function StartButtonState(button) {
			ButtonState.call(this, button);
			this.text = 'Start';
		}
	
		StartButtonState.prototype.toggleState = function() {
			this.button.state = this.button.states.STOP;
		};
	
		function StopButtonState(button) {
			ButtonState.call(this, button);
			this.text = 'Stop';
		}
	
		StopButtonState.prototype.toggleState = function() {
			this.button.state = this.button.states.START;
		};
	
		function Button(StartButtonState, StopButtonState) {
			this.states = {
				START: new StartButtonState(this),
				STOP: new StopButtonState(this)
			};
			this.state = this.states.START;
			this.root;
			this._textContent;
		}
	
		Button.prototype.render = function() {
			this.root = document.createElement('button');
			this._textContent = document.createTextNode(this.text || '');
			this.root.appendChild(this._textContent);
			this._updateDOM();
			return this.root;
		};
	
		Button.prototype._updateDOM = function() {
			this._textContent.textContent = this.state.text;
			return this.root;
		};
	
		Button.prototype.toggleState = function() {
			this.state.toggleState();
			this._updateDOM();
		};
	
		Button.prototype.addEventListener = function(event, handler) {
			this.root.addEventListener(event, handler.bind(this));
		};


		function ColoredStartButtonState(button) {
			StartButtonState.call(this, button);
			this._color = 'green';
		}

		ColoredStartButtonState.prototype = Object.create(StartButtonState.prototype);

		function ColoredStopButtonState(button) {
			StopButtonState.call(this, button);
			this._color = 'red';
		}

		ColoredStopButtonState.prototype = Object.create(StopButtonState.prototype);

		function ColoredButton() {
			Button.call(this, ColoredStartButtonState, ColoredStopButtonState);
		}

		ColoredButton.prototype = Object.create(Button.prototype);

		ColoredButton.prototype._updateDOM = function() {
			Button.prototype._updateDOM.call(this);
			this.root.className = 'u-' + this.state._color;
		}

		return ColoredButton;
	})();

	var Test = (function() {
		var intervalId;

		function run() {
			var i = 0;

			var component = new Component(i.toString());
			component.render();
			document.body.appendChild(component.root);

			var button = new Button();
			button.text = 'Start';
			button.render();
			document.body.appendChild(button.root);
			button.addEventListener('click', function() {
				if (intervalId) {
					clearInterval(intervalId);
					intervalId = null;
				} else {
					intervalId = setInterval(function() {
						component.text = i.toString();
						component.update();
						i++;
					}, 10);
				}
				this.toggleState();
			});
		}

		return {
			run: run
		};
	})();

	return {
		Component: Component,
		Button: Button,
		Test: Test
	};

}).call(DesignPatterns, document);