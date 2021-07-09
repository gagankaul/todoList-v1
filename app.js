//An example of functional programming in Javascript

//Creating a todos object
var todos = [
  {todoText:"item 1", completed:false},
  {todoText:"item 2", completed:false},
  {todoText:"item 3", completed:false}
];

//Display Todos function

function displayTodos() {
  var todoListUL = document.getElementById("todo-list-ul");

  todoListUL.innerHTML = "";

  for (var i = 0; i < todos.length; i++) {
        
    var newListItem = document.createElement("li");

    // var radioBox = document.createElement("input");
    // radioBox.type = "checkbox";

    if (todos[i].completed === false) {
      newListItem.innerHTML = " [ ] " + todos[i].todoText;
    } else {
      newListItem.innerHTML = " [X] " + todos[i].todoText;
    }

    var removeButton = document.createElement("button");
    removeButton.innerHTML = "x";
    removeButton.id = "deletebtn-" + i;
    removeButton.addEventListener("click", deleteTodo);
    
    // newListItem.appendChild(radioBox);


    var toggleButton = document.createElement("button");
    toggleButton.innerHTML = "Toggle";
    toggleButton.addEventListener("click", toggleTodo);
    toggleButton.id = "togglebtn-" + i;

    newListItem.appendChild(toggleButton)
    newListItem.appendChild(removeButton);
    todoListUL.appendChild(newListItem);
  }
}

//Delete a Todo function
function deleteTodo(event) {
  var buttonID = event.currentTarget.id;

// In the next line, I had earlier used "string.charAt(string.length-1)"" to grab the last character.
// However, I found a bug in this method for todos > 9. Discarded this to use "string.prototype.split" function.

  var splitID = buttonID.split("-");
  var position = splitID[1];

// A shorter way to write the above lines of code:
// var position = event.currentTarget.id.buttonID.split("-")[1];
  
  todos.splice(position, 1);
  
  displayTodos();
}


//Toggle a single Todo function

function toggleTodo(event) {
  var toggleButtonID = event.currentTarget.id;  
  var position = toggleButtonID.split("-")[1];

  if (todos[position].completed === false) {
    todos[position].completed = true;
  } else {
    todos[position].completed = false;
  }
  
  displayTodos();
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


//Display the Todos on First Page Load
displayTodos();


//Adding Functionality to Buttons

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