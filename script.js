//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");
//Events Listner
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  //   Prevent form from submitting
  event.preventDefault();

  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Check Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append To List

  todoList.appendChild(todoDiv);

  //Clear todo Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // ANIMATION
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // CHECK MARK

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.dispaly = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.dispaly = "none";
        } else {
          todo.dispaly = "none";
        }
        break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.dispaly = "flex";
          } else {
            todo.dispaly = "none";
          }
          break;
    }
  });
}
