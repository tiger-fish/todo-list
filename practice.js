let todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("This list is empty");
    } else {
      console.log("My Todos:");
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].textTodo);
        } else {
          console.log("( )", this.todos[i].textTodo);
        }
      }
    }
  },
  addTodo: function (textTodo) {
    this.todos.push({
      textTodo: textTodo,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function (position, textTodo) {
    this.todos[position].textTodo = textTodo;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
  },
  deleteAll: function () {
    this.todos.splice(0, this.todos.length);
    this.displayTodos();
  },
};

let handlers = {
  displayTodos: function () {
    todoList.displayTodos();
  },
  addTodo: function () {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = " ";
  },
  changeTodo: function () {
    let changeTextTodoPosition = document.getElementById(
      "changeTextTodoPosition"
    );
    let changeTextTodoInput = document.getElementById("changeTextTodoInput");
    todoList.changeTodo(
      changeTextTodoPosition.valueAsNumber,
      changeTextTodoInput.value
    );
    changeTextTodoPosition.value = "";
    changeTextTodoInput.value = "";
  },
  deleteTodo: function () {
    let deleteTodoTextPosition = document.getElementById(
      "deleteTodoTextPosition"
    );
    todoList.deleteTodo(deleteTodoTextPosition.valueAsNumber);
    deleteTodoTextPosition.value = "";
  },
  toggleCompleted: function () {
    let toggleCompletedPosition = document.getElementById(
      "toggleCompletedPosition"
    );
    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
    toggleCompletedPosition.value = "";
  },
  toggleAll: function () {
    todoList.toggleAll();
  },
  deleteAll: function () {
    todoList.deleteAll();
  },
};
