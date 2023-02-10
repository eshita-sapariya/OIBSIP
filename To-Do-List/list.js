const form = document.querySelector("#task-form");
const input = document.querySelector(".input");
const list_el = document.querySelector(".tasks-container");

const functionality = () => {
  const task = input.value;

  if (!task) {
    alert("Please mention the task!!");
  }

  const task_el = document.createElement("div");
  task_el.classList.add("task");

  const task_content_el = document.createElement("div");
  task_content_el.classList.add("content");
  task_content_el.innerText = task;

  const task_input_el = document.createElement("input");
  task_input_el.classList.add("text");
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.setAttribute("readonly", "readonly");

  task_el.appendChild(task_content_el);

  const task_actions_el = document.createElement("div");
  task_actions_el.classList.add("actions");

  const task_delete_el = document.createElement("button");
  task_delete_el.classList.add("delete-btn");
  task_delete_el.innerHTML = "delete";

  task_actions_el.appendChild(task_delete_el);
  task_el.appendChild(task_actions_el);

  list_el.appendChild(task_el);

  input.value = "";

  task_delete_el.addEventListener("click", () => {
    list_el.removeChild(task_el);
  });
};

form.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    functionality();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  functionality();
});
