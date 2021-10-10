//function to add buttons and li items
function addNewItem()
{
    var taskListItem = document.createElement("li");
    taskListItem.className += "task-list-items"
    var inputValue = document.getElementById("taskInput").value;
    var textnode= document.createTextNode(inputValue);
    var deleteButton = document.createElement("button");
    deleteButton.className += "delete-button"
    deleteButton.innerHTML = '<i class = "fa fa-trash"></i>';
    var checkBox = document.createElement("input");
    checkBox.type='checkbox';
    checkBox.className += "task-done";
    taskListItem.appendChild(textnode);
    
    if (inputValue === '') 
      {
        alert("Task cannot be empty");
      } 
    else {
        document.getElementById("taskList").appendChild(taskListItem);
        taskListItem.appendChild(deleteButton);
        taskListItem.appendChild(checkBox);
        doneTask();
        checkBox.addEventListener('click',()=>this.doneTask());
        deleteButton.addEventListener('click',()=>this.deleteTask());
        }  
      document.getElementById("taskInput").value = "";
    }


//function to remove list item from the list when "trash" button is pressed

 function deleteTask()
  { 
    var closeButton = document.getElementsByClassName("delete-button");
      for(var i=0; i < closeButton.length;i++)
       {
         closeButton[i].onclick = function() {
        this.parentElement.remove();
        doneTask();
        
       }
    }
}

//function to get the count detail of task status
function doneTask() {
  var item = document.getElementsByTagName("input");
  var totalCheckbox=0;
  var checkedCheckbox=0;
  for(var j=0;j<item.length;j++)
  {
    if (item[j].type === "checkbox")
    {
      totalCheckbox=totalCheckbox+1;
    }
    if (item[j].checked === true) 
    {
      checkedCheckbox=checkedCheckbox+1;
    }
    
  }
  document.getElementById("taskComplete").innerHTML = checkedCheckbox + " Task done out of " + totalCheckbox;
}
