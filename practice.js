let todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty");
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
    let completedTodos = 0;

    for (i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
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

let displayTodosBtn = document.getElementById("display-todos");
let toggleAllBtn = document.getElementById("toggle-all");
let deleteAllBtn = document.getElementById("delete-all");

displayTodosBtn.addEventListener("click", function () {
  todoList.displayTodos();
});

toggleAllBtn.addEventListener("click", function () {
  todoList.toggleAll();
});

deleteAllBtn.addEventListener("click", function () {
  todoList.deleteAll();
});
