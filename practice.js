// 1. todoList.addTodo should add objects

// 2. todoList.changeTodo should change the todoText property

// 3. todoList.toggleCompleted should change the completed propery

let todoList = {
  todos=[], 
  displayTodo: function() {
    console.log('My Todos', todos);
  }, 
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    this.displayTodo();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = 
    todoText; 
    this.displayTodo();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodo();
  }, 
  toggleCompleted: function () {
    let todo = this.todos[position]
    todo.completed = !todo.completed;
  }
}