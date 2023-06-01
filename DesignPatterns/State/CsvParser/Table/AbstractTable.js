define("AbstractTable" , ["InstantiationException", "UnimplementedAbstractMethodCallException"], function(
    InstantiationException,
    UnimplementedAbstractMethodCallException
) {
    "use strict";

    function AbstractTable() {
        if (this.constructor === AbstractTable) {
            throw new InstantiationException(this);
        }
    }

    AbstractTable.prototype.addRow = function() {
        throw new UnimplementedAbstractMethodCallException(this);
    };

    AbstractTable.prototype.lastRow = function() {
        throw new UnimplementedAbstractMethodCallException(this);
    };

    AbstractTable.prototype.addHeader = function () {
        throw new UnimplementedAbstractMethodCallException(this);
    };

    AbstractTable.prototype.header = function () {
        throw new UnimplementedAbstractMethodCallException(this);
    };
});