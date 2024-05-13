function submitfn(event) {
    event.preventDefault();

    var todoInput = document.querySelector('.todo-input').value.trim();
    if (todoInput === '') return;

    var todoList = document.querySelector('.todo-list');

    var todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.textContent = todoInput;

    var completeButton = document.createElement('button');
    completeButton.className = 'complete-btn';
    completeButton.textContent = 'Complete';
    completeButton.onclick = function () {
      todoItem.classList.toggle('completed');
    };

    var deleteButton = document.createElement('button');
    deleteButton.className = 'trash-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      todoList.removeChild(todoItem);
    };

    todoItem.appendChild(completeButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    document.querySelector('.todo-input').value = '';
  }