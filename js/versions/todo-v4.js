let todoList = {
  todos: [],
  displayTodos: function () {
    console.log("My todos:", this.todos);
  },
  // 1. todoList.addTodo should add objects
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  // 2. todoList.changeTodo should change the todoText property
  changeTodo: function (position, todoText) {
    // this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // 3. todoList.toggleCompleted should change the completed propery
  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
};
