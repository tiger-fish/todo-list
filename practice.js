let todoList = {
  todos: [],
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function () {
    let totalTodos = this.todos.length;
    let completedTodo = 0;

    for (i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodo++;
      }
    }

    if (completedTodo === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  },
  deleteAll: function () {
    this.todos.splice(0, this.todos.length);
  },
};

// change data
let handlers = {
  addTodo: function () {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function () {
    let positionTodoTextInput = document.getElementById(
      "positionTodoTextInput"
    );
    let changeTodoTextInput = document.getElementById("changeTodoTextInput");

    todoList.changeTodo(
      positionTodoTextInput.valueAsNumber,
      changeTodoTextInput.value
    );

    positionTodoTextInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  toggleCompleted: function () {
    let toggleCompletedPosition = document.getElementById(
      "toggleCompletePosition"
    );

    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);

    toggleCompletedPosition.value = "";
    view.displayTodos();
  },
  deleteTodo: function () {
    let deleteTodoTextPosition = document.getElementById(
      "deleteTodoTextPosition"
    );

    todoList.deleteTodo(deleteTodoTextPosition.valueAsNumber);

    deleteTodoTextPosition.value = "";
    view.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  },
  deleteAll: function () {
    todoList.deleteAll();
    view.displayTodos();
  },
};

// only showing what todo looks like
let view = {
  displayTodos: function () {
    let todosUl = document.querySelector(".todo-list__display-todos");
    todosUl.innerHTML = "";
    for (i = 0; i < todoList.todos.length; i++) {
      // each li element should contain .todoText
      // each list element should show .completed
      let todoLi = document.createElement("li");
      todoLi.classList.add("todo-list__display-item");
      let todoTextCompletion = 0;
      let todo = todoList.todos[i];
      if (todo.completed === true) {
        todoTextCompletion = "(x) " + todo.todoText;
      } else {
        todoTextCompletion = "( ) " + todo.todoText;
      }
      todoLi.textContent = todoTextCompletion;
      todosUl.appendChild(todoLi);
    }
  },
};
