const todoInput = document.getElementById('todo-input')
const addTaskButton = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')

let test = todoInput.value
console.log(test)

// Add a task

//Delete task
//cross out the tasks when complete
//Event listeners
//Starting examples.

const addTask = () => {
  const taskText = todoInput.value.trim()

  if (taskText !== '') {
    const taskItem = createTaskItem(taskText)
    todoList.appendChild(taskItem)
    todoInput.value = ''
  }
}

//Create a new tast item
const createTaskItem = (taskText) => {
  const taskItem = document.createElement('li')
  taskItem.classList.add('todo-item')

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.classList.add('checkbox')

  const taskTextSpan = document.createElement('span')
  taskTextSpan.innerHTML = taskText

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  deleteBtn.classList.add('delete-btn')

  deleteBtn.addEventListener('click', deleteTask)

  taskItem.appendChild(checkbox)
  taskItem.appendChild(taskTextSpan)
  taskItem.appendChild(deleteBtn)

  return taskItem
}

const deleteTask = (event) => {
  const taskItem = event.target.parentNode
  todoList.removeChild(taskItem)
}

const toggleTask = (event) => {
  const taskItem = event.target.parentNode
  taskItem.classList.add('completed')
}

// Event Listeners:

addTaskButton.addEventListener('click', addTask)

todoInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask()
  }
})

todoList.addEventListener('change', toggleTask)



const intitialTasks = [
  'Buy groceries',
  'Clean house',
  'Fix kitchen sink',
]

intitialTasks.forEach((task) => {
  const taskItem = createTaskItem(task)
  todoList.appendChild(taskItem)
})
