const searchInput = document.getElementById("search");
const filterCategory = document.getElementById("filterCategory");
const tasks = document.querySelectorAll(".task");

searchInput.addEventListener("input", filterTasks);
filterCategory.addEventListener("change", filterTasks);

function filterTasks() {
  const searchText = searchInput.value.toLowerCase();
  const category = filterCategory.value;

  tasks.forEach(task => {
    const taskText = task.textContent.toLowerCase();
    const taskCategory = task.dataset.category;

    const matchesSearch = taskText.includes(searchText);
    const matchesCategory = category === "all" || taskCategory === category;

    if (matchesSearch && matchesCategory) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
