function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    var newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

function removeTask(btn) {
  var li = btn.parentNode;
  li.parentNode.removeChild(li);
}
