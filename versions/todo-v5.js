let todoList = {
  todos: [],
  displayTodos: function () {
    // 2. displayTodos should show tell you if .todos is empty

    if (this.todos.length === 0) {
      console.log("Your todo list is empty.");
    } else {
      console.log("My Todos:");
      // 1. displayTodos should show .todoText
      // 3. displayTodos should show .completed
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
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
