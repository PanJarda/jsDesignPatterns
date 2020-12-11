(function(global) {
  'use strict';

  function AbstractPublisher(category) {
    this.category = category;
  }

  AbstractPublisher.prototype.sellPublication = function(pageCount) {
    var publication = this.createPublication(pageCount);
    publication.open();

    var page = Math.floor(Math.random() * pageCount);
    publication.setPageNumber(page);

    publication.close();

    return publication;
  };

  global.DesignPatterns.Factory.Publications.AbstractPublisher = AbstractPublisher;
})(this);
