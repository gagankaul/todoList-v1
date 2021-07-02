//An example of functional programming in Javascript

var todos = [
  {todoText:"item 1", completed:false},
  {todoText:"item 2", completed:false},
  {todoText:"item 3", completed:false}
];

function displayTodos() {
  for (var i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}

//Assumption: All new Todos will have the default completed status as false.

function addTodo(initialTodoText) {
  todos.push({todoText: initialTodoText,
    completed: false});
  displayTodos();
}

function changeTodo(position, newTodoText) {
  todos[position].todoText = newTodoText;
  displayTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

function toggleTodo(position) {
  if (todos[position].completed === false) {
    todos[position].completed = true;
  } else {
    todos[position].completed = false;
  }
  displayTodos();
}

function toggleAll() {
  
  completedTodos = 0;

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      completedTodos++;
    }
  }

  for (var i = 0; i < todos.length; i++) {
    if (completedTodos === todos.length) {
      todos[i].completed = false;  
  } else {
    todos[i].completed = true;
  }
  }
  displayTodos();
}
