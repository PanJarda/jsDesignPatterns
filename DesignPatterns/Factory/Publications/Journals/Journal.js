(function(global) {
  'use strict';

  var Publications = global.DesignPatterns.Factory.Publications;
  var AbstractPublication = Publications.AbstractPublication;

  function Journal(category, pageCount) {
    AbstractPublication.call(this, category, pageCount);
  }

  Journal.prototype = Object.create(AbstractPublication.prototype);
  
  Journal.prototype.constructor = Journal;

  Publications.Journals.Journal = Journal;
  
})(this);