(function(global) {
  'use strict';
	var MVP =  global.DesignPatterns.MVP;
	var User = MVP.Model.User

  function run() {
		var user1 = new User('jarda', 'jarda@email.com');
		console.log(user1);

		user1.setUserName('Antonius');
		user1.setEMail('antonius@email.com');

		console.log(user1);
	}

  MVP.Test = {
    run: run
  };
})(this);