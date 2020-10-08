// 1. it should have a place to store todos
let todos = ["item 1", "item 2", "item 3"];

// 2. it should have a way to display todos
console.log(todos);

// 3. it should have a way to add todos
todos.push("item 4");

// 4. it should have a way to edit todos
todos[0] = "changed item";

// 5. it should have a way to delete todos
todos.splice(0, 1);
