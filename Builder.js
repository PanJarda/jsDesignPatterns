"use strict";

var DesignPatterns = DesignPatterns || {};

DesignPatterns.Builder = (function(document) {

	function Component(text) {
		this.text = text || '';
		var div = document.createElement('div'),
		textContent = document.createTextNode(this.text);
		div.appendChild(textContent);
		this.DOMRoot = div;
	}

	Component.prototype._updateDOM = function() {
		this.DOMRoot.textContent = this.text;
	};

	Component.prototype.setText = function(text) {
		this.text = text;
		this._updateDOM();
	};

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
	
		function Button(StartButtonState, StopButtonState, translationFactory) {
			this.state = new StartButtonState(this, StopButtonState);
			this.DOMRoot = document.createElement('button');
			this.translation = translationFactory.createTranslation(this.state.text);
			this.DOMRoot.appendChild(this.translation.getTextNode());
			this.DOMRoot.addEventListener('click', this.toggleState.bind(this));
			this._updateDOM();
		}
	
		Button.prototype._updateDOM = function() {
			this.translation.setId(this.state.text);
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

		function ColoredButton(translationFactory) {
			Button.call(this, ColoredStartButtonState, ColoredStopButtonState, translationFactory);
		}

		ColoredButton.prototype = Object.create(Button.prototype);

		ColoredButton.prototype._updateDOM = function() {
			Button.prototype._updateDOM.call(this);
			this.DOMRoot.className = 'u-' + this.state._color;
		}

		function ButtonFactory(type, translationFactory) {
			this.type = type;
			this.translationFactory = translationFactory;
		}

		ButtonFactory.prototype.setTranslationFactory = function(translationFactory) {
			this.translationFactory = translationFactory;
		};
	
		ButtonFactory.prototype.createButton = function() {
			var button = new this.type(this.translationFactory);
			return button;
		}

		return {
			ColoredButton: ColoredButton,
			Button: Button,
			ButtonFactory: ButtonFactory
		};
	})();

	function App(Component, buttonFactory, translationProvider) {
		this.Component = Component;
		this.buttonFactory = buttonFactory;
		this.iterator = 0;

		var DOMRoot = document.createElement('div'),
		button = this.buttonFactory.createButton(),
		component = new this.Component(this.iterator.toString());

		button.addEventListener('click', this.handleClick.bind(this));

		DOMRoot.appendChild(component.DOMRoot);
		DOMRoot.appendChild(button.DOMRoot);

		var switchLocaleBtn = document.createElement('button');
		var switchLocaleBtnLabel = document.createTextNode(translationProvider.getLocale());
		switchLocaleBtn.appendChild(switchLocaleBtnLabel);
		switchLocaleBtn.addEventListener('click', function() {
			var locale = translationProvider.getLocale();
			translationProvider.setLocale(locale === 'en' ? 'cs' : 'en');
			this.textContent = locale;
		});
		DOMRoot.appendChild(document.createElement('br'));
		DOMRoot.appendChild(switchLocaleBtn);
		
		this.button = button;
		this.component = component;
		this.DOMRoot = DOMRoot;
	}
	
	App.prototype.incrementIterator = function() {
		this.iterator++;
		this.component.setText(this.iterator.toString());
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
			var translationTables = {
				'cs': {
					'Start': 'Zacni',
					'Stop': 'Zastav'
				},
				'en': {
					'Start': 'Start',
					'Stop': 'Stop'
				}
			}
			var translationProvider = new Translation.TranslationProvider(translationTables, 'cs');
			var translationFactory = new Translation.TranslationFactory(translationProvider);
			var app = new App(Component, new Buttons.ButtonFactory(Buttons.ColoredButton, translationFactory), translationProvider);
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
		Test: Test
	};

}).call(DesignPatterns, document);

function tmp() {
	var translationTables = {
		'en': {
			'e-mail': 'e-mail',
			'name': 'Name'
		},
		'cs': {
			'surname': 'Příjmení',
			'name': 'Jméno'
		}
	}
	var translationProvider = new Translation.TranslationProvider(translationTables, 'cs');

	var translationFactory = new Translation.TranslationFactory(translationProvider);

	var div = document.createElement('div');
	var name = translationFactory.createTranslation('name');
	div.appendChild(name.getTextNode());
	document.body.appendChild(div);
	
	div = document.createElement('div');
	var surname = translationFactory.createTranslation('surname');
	div.appendChild(surname.getTextNode());
	document.body.appendChild(div);

	var switchLocaleBtn = document.createElement('button');
	var switchLocaleBtnLabel = document.createTextNode('En');
	switchLocaleBtn.appendChild(switchLocaleBtnLabel);
	switchLocaleBtn.addEventListener('click', function() {
		var locale = translationProvider.getLocale();
		translationProvider.setLocale(locale === 'en' ? 'cs' : 'en');
		this.textContent = locale === 'en' ? 'en' : 'cs';
	});

	document.body.appendChild(switchLocaleBtn);
}

tmp();