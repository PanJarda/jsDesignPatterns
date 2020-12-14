/*
WIP

*/(function(global) {
	'use strict';

	global.DesignPatterns.MVP.Model = {};
})(this);

(function(global) {
	'use strict';

	var Model = global.DesignPatterns.MVP.Model;

	function User(id, userName, eMail) {
		this.setUserName(userName);
		this.setEMail(eMail);
	}

	// trait Id
	Object.assign(User.prototype, Id);
	Object.assign(User.prototype, Observable);

	User.prototype.setUserName = function(userName) {
		this._userName = userName;
	};

	User.prototype.setEMail = function(eMail) {
		// check valid email address
		this._eMail = eMail;
	};

	User.prototype.toJSON = function() {
		return JSON.stringify({
			userName: this._userName,
			eMail: this._eMail
		});
	};

	User.prototype.hydrate = function(object) {
		this.setUserName(object.userName);
		this.setEMail(object.eMail);
	};

	Model.User = ORM(User);

	/*User.setUserName('ff');
	 User.persist()
	 	.then(success => console.log('user updated successfully'))
		.catch(error => console.log(error));
	*/

	function Book(id, author) {
		ORM.ManyToOne('_author', Author);
	}

	Book.prototype.setAuthor = function(author) {
		this._author = author;
	};


	function ServiceEntityRepository(managerRegistry) {
		this._managerRegistry = managerRegistry;
	}

	ServiceEntityRepository.prototype.getEntityManager = function() {
		return this.entityManager;
	};

	function UserRepository(inMemoryStrategy) {
		ServiceEntityRepository.call(this);
		this._entityClass = User;
		this._inMemoryStrategy = inMemoryStrategy;
	}

	UserRepository.prototype.getUserById = function(id, callback) {
		var query = this.getEntityManager()
			.getRepository(User)
			.getById(id);
		
		callback(query.getQuery().getResult());
	};

	UserRepository.prototype.update = function(user) {
		user.persist();
	}



	function Presenter() {
		var user = new User();
		user.subscribe(this);
	}

	/*


	passive view

	view ---> presenter ---> model
			<----						<---

	Presenter.prototype.getUser = function(123) {
		userRepository.getUserById(123)
			.then(function(user) {
				view.setUserName(user.getEmail());
				view.setEMail(user.getEMail());
			})
			.catch(error = console.log(error));
	};


	Presenter.prototype.addTodo = function(event) {
		var txt = this.view.getInputText();
		var todo = new Todo(txt);
		this.entityManager.persist(todo)
			.then(this.updateTodos);
		// this will trigger update of model
		// model entities are observables which presenter subscribes
		// so if success this.update will be triggered
	};
ss
	Presenter.prototype.updateTodos = function() {
		var todoRepository = this.entityManager.getRepository(Todo);

		todoRepository.getAll()
			.then(this.view.updateTodos.bind(this.view))
			.catch(this.view.showErrorMessage.bind(this.view));
	};



	function View(presenter) {
		this._presenter = presenter;
	}

	View.prototype.updateTodos = function(todos) {
		
	}

	View.prototype.render = function() {
		...
		button.addEventListener('click', presenter.handleButtonClick);
	}

	View.prototype.getInputText = function() {
		return this.inputText;
	};

	View.prototype.addTodo = function(todo) {
		this.todos.push(new Todo(todo.text, todo.done));
	}
	*/


	Presenter.prototype.update = function(entity) {
		this.view.setUserName = entity.userName;
	}

	Model.User = User;
})(this);
