let todoList = {
  todos: [],
  // 1. dispplayTodos should show .todoText
  // 2. displayTodos should show tell you if .todos is empty
  // 3. displayTodos should show .completed
  displayTodos: function () {
    console.log("My todos:", this.todos);
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
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
