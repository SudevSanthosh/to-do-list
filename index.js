
//function to append new list items to to-do list

function addNewItem()
{   
    let taskListItems = document.createElement("li");            //declaring new variables
    let deleteButton = document.createElement("button");
    let doneButton = document.createElement("button");
    var inputValue = document.getElementById("taskInput").value;
    var textnode= document.createTextNode(inputValue);
    doneButton.className += "done-button"                        //classnames for new elements
    taskListItems.className += "task-list-items"
    deleteButton.className += "delete-button"
    taskListItems.appendChild(textnode);
    if (inputValue === '') 
    {
        alert("cant be empty");
      } 
      else {
        document.getElementById("taskList").appendChild(taskListItems);
        deleteButton.innerHTML = '<i class = "fa fa-trash"></i>';
        taskListItems.appendChild(deleteButton);
        doneButton.innerHTML = '<i class=" fa fa-check-square" aria-hidden="true"></i>';
        taskListItems.appendChild(doneButton);
        deleteButton.addEventListener('click',()=>this.deleteTask(taskList));
        doneButton.addEventListener('click',()=>this.doneTask(taskList))
=======
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


//function to remove list item from the list when "trash" button is pressed

 function deleteTask()
  {
    var closeButton = document.getElementsByClassName("delete-button");
      for(var i=0; i < closeButton.length;i++)
       {
         closeButton[i].onclick = function() {
         var div =this.parentElement;
         div.style.display= "none";
        }
    }
}

//function to strike out list when "check" button is pressed

function doneTask()
  {
    var donebtn = document.getElementsByClassName("done-button");
    for(var i=0; i < donebtn.length;i++) {
      donebtn[i].onclick = function() {
        var div =this.parentElement;
        div.style.textDecoration= "line-through";
        div.style.background="#485460";
        div.style.color="white"; 
      }
    }
}


