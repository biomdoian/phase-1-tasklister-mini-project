document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const formInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  if (form && formInput && taskList) { 
      form.addEventListener('submit', (event) => {
          event.preventDefault();
          const taskDescription = formInput.value.trim();
          if (taskDescription) { 
              const listItem = document.createElement('li');
              listItem.textContent = taskDescription;
              taskList.appendChild(listItem);
              formInput.value = '';
          }
      });
  } else {
      console.error("One or more required elements not found.");
  }
})