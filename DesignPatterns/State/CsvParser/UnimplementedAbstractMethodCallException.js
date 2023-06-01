define("UnimplementedAbstractMethodCallException", [], function() {
   function UnimplementedAbstractMethodCallException(instance, method) {
       this.name = "UnimplementedAbstractMethodCallException";
       this.message = instance.constructor.name + " has not implemented method " + method;
   }

   return UnimplementedAbstractMethodCallException;
});