// 1. it should store the todos array on an object
let todoList = {
  todos: ["item 1", "item 2", "item 3"],
};

// 2. it should have a displayTodos method
let todoList = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function () {
    console.log("My todos:", this.todos);
  },
};

// 3. it should have an addTodo method
let todoList = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function () {
    console.log("My todos:", this.todos);
  },
  addTodo: function (todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
};

// 4. it should have a changeTodo method
let todoList = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function () {
    console.log("My todos:", this.todos);
  },
  addTodo: function (todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
};

// 5. it should have a deleteTodo method
let todoList = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function () {
    console.log("My todos:", this.todos);
  },
  addTodo: function (todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function (position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
};
