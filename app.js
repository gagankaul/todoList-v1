var todos = [];

function addTodo() {
  var newTodo = prompt("Please add a new Todo: ");
  todos.push(newTodo);
  console.log(todos);
}