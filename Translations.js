(function(window) {
	"use strict";

	window.Translation = (function() {
		function TranslationProvider(translationTables, defaultLocale) {
			this.locale = defaultLocale;
			this.translationTables = translationTables;
			this.translationInstances = [];
		}
		
		TranslationProvider.prototype.registerTranslationInstance = function(translationInstance) {
			this.translationInstances.push(translationInstance);
			var translation = this.translationTables[this.locale][translationInstance.getId()];
			translationInstance.setText(translation);
		};

		TranslationProvider.prototype.unregisterTranslationInstance = function(translationInstance) {
			var instances = this.translationInstances;
			var index = instances.indexOf(translationInstance);
			if (index > -1) {
				instances.splice(index, 1);
			}
		};
		
		TranslationProvider.prototype.updateTranslationInstances = function() {
			var instances = this.translationInstances,
			locale = this.locale,
			tables = this.translationTables,
			instanceCount = instances.length,
			instance, id, translation;
			for (var i = 0; i < instanceCount; i++) {
				instance = instances[i];
				id = instance.getId();
				translation = tables[locale][id] || id;
				instance.setText(translation);
			}
		};

		TranslationProvider.prototype.updateTranslation = function(translationInstance) {
			var translation = this.translationTables[this.locale][translationInstance.getId()];
			translationInstance.setText(translation);
		};

		TranslationProvider.prototype.getLocale = function() {
			return this.locale;
		};
		
		TranslationProvider.prototype.setLocale = function(locale) {
			this.locale = locale;
			this.updateTranslationInstances();
		};
		
		function Translation(translationProvider, id) {
			this.id = id;
			this.text;
			this.textNode = document.createTextNode('');
			this.translationProvider = translationProvider;
			translationProvider.registerTranslationInstance(this);
		}
		
		Translation.prototype.getTextNode = function() {
			return this.textNode;
		};
		
		Translation.prototype.getId = function() {
			return this.id;
		};

		Translation.prototype.setId = function(id) {
			this.id = id;
			this.translationProvider.updateTranslation(this);
			this.textNode.textContent = this.text;
		};
		
		Translation.prototype.getText = function() {
			return this.text;
		};
		
		Translation.prototype.setText = function(text) {
			this.text = text;
			this.textNode.textContent = text;
		};

		function TranslationFactory(translationProvider) {
			this.translationProvider = translationProvider;
		}

		TranslationFactory.prototype.createTranslation = function(id) {
			return new Translation(this.translationProvider, id);
		};

		return {
			Translation: Translation,
			TranslationFactory: TranslationFactory,
			TranslationProvider: TranslationProvider
		};
	})()
})(window);