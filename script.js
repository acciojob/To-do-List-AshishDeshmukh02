//your code here
const input = document.querySelector("#newTodoInput");
const button = document.querySelector("#addTodoBtn");
const list = document.querySelector("#todoList");

button.addEventListener("click", function () {
  if (!input.value) return; // check if input is empty
  
  const newTodo = document.createElement("li");
  newTodo.textContent = input.value;
  list.appendChild(newTodo);

  input.value = ""; // reset input value
});
