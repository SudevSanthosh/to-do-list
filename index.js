function addNewItem()
{
    var taskListItems = document.createElement("li");
    taskListItems.className += "task-list-items"
    var inputValue = document.getElementById("taskInput").value;
    var textnode= document.createTextNode(inputValue);
    taskListItems.appendChild(textnode);
    if (inputValue === '') {
        alert("Task cannot be empty");
      } else {
        document.getElementById("taskList").appendChild(taskListItems);
        var deleteButton = document.createElement("button");
        deleteButton.className += "delete-button"
        deleteButton.innerHTML = "X";
        taskListItems.appendChild(deleteButton);
      }
      document.getElementById("taskInput").value = "";
    }


