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

//Add a New Todo function
function addTodo() {
  initialTodoText = addInput.value;
  todos.push({todoText: initialTodoText,
    completed: false});
  addInput.value = "";
  displayTodos();
}


//Edit a Todo function
function changeTodo(position, newTodoText) {
  position = editPosInput.value;
  newTodoText = editTextInput.value;
  todos[position].todoText = newTodoText;
  editPosInput.value = "";
  editTextInput.value = "";
  displayTodos();
}

//Delete a Todo function
function deleteTodo(position) {
  position = delPostInput.value;
  todos.splice(position, 1);
  delPostInput.value = "";
  displayTodos();
}

//Toggle a single Todo function
function toggleTodo(position) {
  position = toggleTodoPos.value;
  if (todos[position].completed === false) {
    todos[position].completed = true;
  } else {
    todos[position].completed = false;
  }
  toggleTodoPos.value = "";
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

//Adding Functionality to Buttons

//Display Todos
var displayTodosButton = document.getElementById("display-todos-button");
displayTodosButton.addEventListener("click", displayTodos);

//Toggle All
var toggleAllbutton = document.getElementById("toggle-all-button");
toggleAllbutton.addEventListener("click", toggleAll);

//Add Todo
var addTodosButton = document.getElementById("add-todo-button");
var addInput = document.getElementById("add-input");
addTodosButton.addEventListener("click", addTodo);


//Edit Todo
var editPosInput = document.getElementById("edit-todo-pos");
var editTextInput = document.getElementById("edit-todo-input");
var editTodosButton = document.getElementById("edit-todo-button");
editTodosButton.addEventListener("click", changeTodo);

//Delete Todo
var delPostInput = document.getElementById("del-todo-pos");
var delTodoButton = document.getElementById("del-todo-button");
delTodoButton.addEventListener("click", deleteTodo);

//Toggle Todo
var toggleTodoPos = document.getElementById("toggle-todo-pos");
var toggleTodoButton = document.getElementById("toggle-todo-button");
toggleTodoButton.addEventListener("click", toggleTodo);