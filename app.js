//An example of functional programming in Javascript

var todos = [
  {todoText:"", completed:false},
  {todoText:"", completed:false},
  {todoText:"", completed:false}
];

function displayTodos() {
  console.log("My Todos: ", todos);
}

//Assumption: All new Todos will have the default completed status as false.

function addTodo(initialTodoText) {
  todos.push({todoText: initialTodoText,
    completed: false});
  console.log(todos);
}

function changeTodo(position, newTodoText) {
  todos[position].todoText = newTodoText;
  console.log(todos)
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
}