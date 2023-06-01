define("CellState", ["AbstractParserState"], function(AbstractParserState) {
    "use strict";

    function CellState(parser, table) {
        AbstractParserState.call(this, parser, table);
    }

    CellState.prototype = Object.create(AbstractParserState.prototype);

    CellState.prototype.constructor = CellState;

    CellState.prototype.cellSeparator = function () {
        this.table.rows().last().addCell();
    };

    CellState.prototype.rowSeparator = function () {
        this.table.addRow();
        this.parser.setRowState();
    };

    CellState.prototype.quote = function () {
        this.parser.setQuoteState();
    };

    CellState.prototype.escape = function () {
        this.parser.setEscapeState();
    };

    CellState.prototype.default = function (char) {
        this.table.rows().last().cells().last().push(char);
    };
})