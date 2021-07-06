//An example of functional programming in Javascript

//Creating a todos object
var todos = [
  {todoText:"item 1", completed:false},
  {todoText:"item 2", completed:false},
  {todoText:"item 3", completed:false}
];

//Display Todos function
function displayTodos() {
  for (var i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}

//Add a Todo function
//Assumption: All new Todos will have the default completed status as false.
// function addTodo(initialTodoText) {
//   todos.push({todoText: initialTodoText,
//     completed: false});
//   displayTodos();
// }

function addTodo() {
  initialTodoText = prompt("Enter a New Todo");
  todos.push({todoText: initialTodoText,
    completed: false});
  displayTodos();
}


//Edit a Todo
function changeTodo(position, newTodoText) {
  todos[position].todoText = newTodoText;
  displayTodos();
}

//Delete a Todo
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

//Toggle a single Todo
function toggleTodo(position) {
  if (todos[position].completed === false) {
    todos[position].completed = true;
  } else {
    todos[position].completed = false;
  }
  displayTodos();
}

//Toggle All Function
function toggleAll() {
  
  var completedTodos = 0;

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

//Display Todos Button Functionality
var displayTodosButton = document.getElementById("display-todos-button");
displayTodosButton.addEventListener("click", displayTodos);

//Toggle All Button Functionality
var toggleAllbutton = document.getElementById("toggle-all-button");
toggleAllbutton.addEventListener("click", toggleAll);

//Add Button Functionality
var addTodosButton = document.getElementById("add-todo-button");
var addInput = document.getElementById("add-input");
addTodosButton.addEventListener("click", addTodo);