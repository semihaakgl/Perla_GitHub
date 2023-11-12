const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button");
const todoUl = document.querySelector("#todo-ul");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

window.addEventListener("load", () => {     //? load pencere yüklendiğinde işlemi yap anlamındadır.
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  todoList.forEach((todo) => {
    createTodo(todo);
  });
};

addBtn.addEventListener("click", (e) => {  //? e target tır.
  e.preventDefault();  //? preventdefault veri gönderimini engeller. boş olan verilerin gönderimini engeller. sayfanın yenilenmesini engeller.
  if (todoInput.value.trim() === "") {   //? trim butona bırakılan boşlukların veri olarak algılanmasını engeller.
    alert("Please , enter new todo text!");
    return;   //? butona her bilgi yazdıktan sonra her defasında uyarı gelmesini return ile engelledik.
  }
  //   else{
  //     alert("continue")
  //   }

  const newTodo = {
    id: new Date().getTime(),
    completed: false,
    text: todoInput.value,
  };

  createTodo(newTodo);

  todoList.push(newTodo);

  localStorage.setItem("todoList", JSON.stringify(todoList));

  e.target.closest("form").reset();
});

const createTodo = (newTodo) => {
  const { id, completed, text } = newTodo;   //? destructure yaptık.

  const li = document.createElement("li");
  li.setAttribute("id", id);

  completed ? li.classList.add("checked") : "";

  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");

  li.append(icon);

  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);

  //   todoUl.append(li)
  todoUl.prepend(li);
};

todoUl.addEventListener("click", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  console.log(idAttr);
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
    todoList.forEach((todo) => {
      if (todo.id == idAttr) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem("todoList", JSON.stringify(todoList));
    });
  } else if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
    todoList = todoList.filter((todo) => todo.id != idAttr);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    alert("other element clicked");
  }
});
