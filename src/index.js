//document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('#create-task-form');
  const formInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  if (form && formInput && taskList) {
      function createListItem(taskDescription) {
          const listItem = document.createElement('li');
          listItem.textContent = taskDescription;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', function() {
              listItem.remove();
          });

          const editButton = document.createElement('button');
          editButton.textContent = "Edit";
          editButton.addEventListener('click', function(){
              const newText = prompt("Edit Task", listItem.firstChild.textContent);
              if(newText){
                  listItem.firstChild.textContent = newText;
              }
          });

          listItem.appendChild(deleteButton);
          listItem.appendChild(editButton);
          return listItem;
      }

      form.addEventListener('submit', function(event) {
          event.preventDefault();
          const taskDescription = formInput.value.trim();

          if (taskDescription) {
              taskList.appendChild(createListItem(taskDescription));
              formInput.value = '';
          }
      });
  } else {
      console.error("One or more required elements not found.");
  }
})