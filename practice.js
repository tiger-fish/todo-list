let todoList = {
  todos: [],
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function () {
    let totalTodos = this.todos.length;
    let completedTodo = 0;
    this.todos.forEach(function (todo) {
      if (todo.completed === true) {
        completedTodo++;
      }
    });

    // if (completedTodo === totalTodos) {
    //   this.todos.forEach(function (todo) {
    //     todo.completed = false;
    //   });
    // } else {
    //   this.todos.forEach(function (todo) {
    //     todo.completed = false;
    //   });
    // }

    this.todos.forEach(function (todo) {
      if (completedTodo === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  },
  deleteAll: function () {
    this.todos.splice(0, this.todos.length);
  },
};

// change data
let handlers = {
  addTodo: function () {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
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
    view.displayTodos();
  },
  toggleCompleted: function () {
    let toggleCompletedPosition = document.getElementById(
      "toggleCompletePosition"
    );

    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);

    toggleCompletedPosition.value = "";
    view.displayTodos();
  },
  deleteTodo: function (position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  },
  deleteAll: function () {
    todoList.deleteAll();
    view.displayTodos();
  },
};

// only showing what todo looks like
let view = {
  displayTodos: function () {
    let todosUl = document.querySelector(".todo-list__display-todos");
    todosUl.innerHTML = " ";
    todoList.todos.forEach(function (todo, position) {
      let todoLi = document.createElement("li");
      todoLi.className = "todo-list__display-item";
      let todoTextCompletion = "";
      if (todo.completed === true) {
        todoTextCompletion = "(x) " + todo.todoText;
      } else {
        todoTextCompletion = "( ) " + todo.todoText;
      }
      // 3. each li should have an id that had the todo position
      todoLi.id = position; //replace i with position
      todoLi.textContent = todoTextCompletion;
      // 2. there should be a delete button for each todo
      todoLi.appendChild(this.createDeleteBtn()); //
      todosUl.appendChild(todoLi);
    }, this);
  },
  // 1. there should be a way to create btn
  createDeleteBtn: function () {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.className = "todo-list__delete-btn";
    return deleteBtn;
  },
  setUpEventListeners: function () {
    // 4. delete button should have access to the todo
    let todosUl = document.querySelector(".todo-list__display-todos");
    todosUl.addEventListener("click", function (event) {
      let elementClicked = event.target;
      // 5. clicking delete should update todoList.todos and the D0M
      if (elementClicked.className === "todo-list__delete-btn") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  },
};

view.setUpEventListeners();
