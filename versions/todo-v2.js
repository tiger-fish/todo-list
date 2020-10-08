let todos = ["item 1", "item 2", "item 3"];

// 1. it should have a function to display todos
function displayTodos() {
  console.log(todos);
}

// 2. it should have a function to add todos
function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}

// 3. it should have a function to edit todos
function editTodos(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// 4. it should have a function to delete todos
function deleteTodos(position) {
  todos.splice(position, 1);
  displayTodos();
}
