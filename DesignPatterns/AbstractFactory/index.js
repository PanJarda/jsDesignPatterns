(function(global) {
  'use strict';
  
  function UnimplementedAbstractMethodCallException() {
    this.name = 'UnimplementedAbstractMethodCallException';
  }

  function InstantiationException() {
    this.name = 'InstantiationException';
  }

  DesignPatterns.AbstractFactory = {
    UnimplementedAbstractMethodCallException: UnimplementedAbstractMethodCallException,
    InstantiationException: InstantiationException
  };
})(this);

