import { useState } from 'react'
import TaskForm from './TaskForm'
import TodoList from './TodoList'
import './TodoApp.css'

function TodoApp() {
  
  const [todos, setTodos] = useState([])
  

  function addNewTask(title) {
    if (title !== "")
      setTodos(current => {
        return [
          ...current,
          {
            id : crypto.randomUUID(),
            title : title,
            isDone : false,
          }
        ]
      })
  }

  function toggleIsDone(id, isDone) {
    setTodos(current => {
      const list = current.map(task => {
        if (task.id === id)
          return {...task, isDone}
        return task
      })
      return list.sort((a, b) => (a.isDone ? 1 : -1))
    })
  }

  function deleteTask(id) {
    setTodos(current => {
      return current.filter(task => task.id !== id)
    })
  }

  return (
    <>
      <TaskForm onSubmit={addNewTask}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleIsDone={toggleIsDone} deleteTask={deleteTask} />
    </>
  )
}

export default TodoApp
