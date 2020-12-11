(function(global) {
  'use strict';
  var Factory =  global.DesignPatterns.Factory;
  var Publications = Factory.Publications;
  var BookPublisher = Publications.Books.BookPublisher;
  var JournalPublisher = Publications.Journals.JournalPublisher;

  function run() {
    var bookPublisher = new BookPublisher('PC');

    var book = bookPublisher.sellPublication(100);
    
    console.log(book.constructor.name, book.category, book.pageCount, book.pageNumber);

    var journalPublisher = new JournalPublisher('FF');

    var journal = journalPublisher.sellPublication(210);

    console.log(journal.constructor.name, journal.category, journal.pageCount, journal.pageNumber);
  }

  Factory.Test = {
    run: run
  };
})(this);