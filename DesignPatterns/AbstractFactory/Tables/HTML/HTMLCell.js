(function(global) {
  'use strict';

  var Tables = global.DesignPatterns.AbstractFactory.Tables;
  var AbstractCell = Tables.AbstractCell;
  
  function HTMLCell(content) {
    AbstractCell.call(this, content);
  }

  HTMLCell.prototype = Object.create(AbstractCell.prototype);

  HTMLCell.prototype.constructor = HTMLCell;

  HTMLCell.prototype.show = function() {
    var td = document.createElement('td');
    var contentTextNode = document.createTextNode(this.content);
    td.appendChild(contentTextNode);

    this.contentTextNode = contentTextNode;
    
    return td;
  };

  HTMLCell.prototype.setContent = function(content) {
    this.content = content;
    this.contentTextNode.textContent = content;
  };

  Tables.HTML.HTMLCell = HTMLCell;
})(this);