define("AbstractParser",
    [
        "InstantiationException",
        "UnimplementedAbstractMethodCallException"
    ], function (InstantiationException, UnimplementedAbstractMethodCallException) {
    "use strict";

    function AbstractParser(cellSeparator, rowSeparator, quoteChar, escapeChar) {
        if (this.constructor === AbstractParser) {
            throw new InstantiationException(this);
        }
        this.cellSeparator = cellSeparator;
        this.rowSeparator    = rowSeparator;
        this.quoteChar       = quoteChar;
        this.escapeChar      = escapeChar;
    }

    AbstractParser.prototype.rowSeparator = function () {
        return this.rowSeparator;
    };

    AbstractParser.prototype.cellSeparator = function () {
        return this.cellSeparator;
    };

    AbstractParser.prototype.quoteChar = function () {
        return this.quoteChar;
    };

    AbstractParser.prototype.escapeChar = function () {
        return this.escapeChar;
    };

    AbstractParser.prototype.parse = function() {
        throw new UnimplementedAbstractMethodCallException(this, "parse");
    };

    AbstractParser.prototype.setRowState = function() {
        throw new UnimplementedAbstractMethodCallException(this, "setRowState");
    };

    AbstractParser.prototype.setCellState = function() {
        throw new UnimplementedAbstractMethodCallException(this, "setCellState");
    };

    AbstractParser.prototype.setQuoteState = function() {
        throw new UnimplementedAbstractMethodCallException(this, "setQuoteState");
    };

    AbstractParser.prototype.setEscapeState = function() {
        throw new UnimplementedAbstractMethodCallException(this, "setEscapeState");
    };
})