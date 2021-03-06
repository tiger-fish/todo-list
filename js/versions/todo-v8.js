let todoList = {
  // place to store todos
  todos: [],
  // way to display todos
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty");
    } else {
      console.log("My Todos:");
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  // way to add todo
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  // way to change todo
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  // way to delete todo
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // toggle todo[position].completed
  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  // toggle all todos
  toggleAll: function () {
    // count the number of completed = true todos
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    for (i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // if all total todos are completed then turn all false
    if (completedTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // else turn all true
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  },
  // delete all todos
  deleteAll: function () {
    this.todos.splice(0, this.todos.length);
    this.displayTodos();
  },
};

// html buttons
let handlers = {
  displayTodos: function () {
    todoList.displayTodos();
  },
  addTodo: function () {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    // clears input
    addTodoTextInput.value = "";
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
  },
  deleteTodo: function () {
    let deleteTodoPosition = document.getElementById("deleteTodoPosition");
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    deleteTodoPosition.value = " ";
  },
  toggleCompleted: function () {
    let toggleCompletedPosition = document.getElementById(
      "toggleCompletedPosition"
    );
    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
    toggleCompletedPosition.value = " ";
  },
  toggleAll: function () {
    todoList.toggleAll();
  },
  deleteAll: function () {
    todoList.deleteAll();
  },
};
