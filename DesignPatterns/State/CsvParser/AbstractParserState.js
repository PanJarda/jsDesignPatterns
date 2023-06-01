define(
    "AbstractParserState",
    [
        "InstantiationException",
        "UnimplementedAbstractMethodCallException"
    ], function (InstantiationException, UnimplementedAbstractMethodCallException) {
    "use strict";

    function AbstractParserState(parser, table) {
        if (this.constructor === AbstractParserState) {
            throw new InstantiationException(this);
        }
        this.parser = parser;
        this.table = table;
    }

    AbstractParserState.prototype.cellSeparator = function () {
        throw new UnimplementedAbstractMethodCallException(this, "cellSeparator")
    };

    AbstractParserState.prototype.rowSeparator = function () {
        throw new UnimplementedAbstractMethodCallException(this, "rowSeparator")
    };

    AbstractParserState.prototype.quote = function () {
        throw new UnimplementedAbstractMethodCallException(this, "quote")
    };

    AbstractParserState.prototype.default = function () {
        throw new UnimplementedAbstractMethodCallException(this, "default")
    };

    return AbstractParserState;
});