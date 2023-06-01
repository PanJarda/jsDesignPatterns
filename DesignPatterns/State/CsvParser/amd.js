(function(global) {
    'use strict';

    var moduleStore = {};

    function getModule(moduleName) {
        return moduleStore[moduleName];
    }

    function define(name, imports, factory) {
        var modules = imports.map(getModule);

        global[name] = factory.apply(null, modules);
    }

    global.define = define;
})(typeof window !== "undefined" ? window : this);
