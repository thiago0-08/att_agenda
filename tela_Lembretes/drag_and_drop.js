const tasks = document.querySelectorAll(".task");
const list = document.getElementById("taskList");

tasks.forEach(task => {
  task.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", task.innerText);
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();
  const draggingTask = document.querySelector(".dragging");
  const afterElement = getDragAfterElement(list, e.clientY);
  if (afterElement == null) {
    list.appendChild(draggingTask);
  } else {
    list.insertBefore(draggingTask, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".task:not(.dragging)")];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}
