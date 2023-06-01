define("RowState", ["AbstractParserState"], function(AbstractParserState) {
    "use strict";

    function RowState(parser, table) {
        AbstractParserState.call(this, parser, table);
    }

    RowState.prototype = Object.create(AbstractParserState.prototype);

    RowState.prototype.constructor = RowState;

    RowState.prototype.cellSeparator = function () {
        this.table.rows().last().addCell();
        this.parser.setCellState();
    };

    RowState.prototype.rowSeparator = function () {
        this.table.addRow();
    };

    RowState.prototype.quote = function () {
        this.parser.setQuoteState();
    };

    RowState.prototype.escape = function () {
        this.table.rows().last().cells().last().push(this.parser.escapeChar());
        this.parser.setCellState();
    };

    RowState.prototype.default = function (char) {
        this.table.rows().last().cells().last().push(char);
        this.parser.setCellState();
    };
})