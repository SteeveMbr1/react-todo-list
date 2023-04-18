import { useEffect, useState } from 'react'
import TaskForm from './TaskForm'
import TodoList from './TodoList'
import './TodoApp.css'

function TodoApp() {
  
  const [todos, setTodos] = useState(() => {
    const list = localStorage.getItem("TodoListApp")
    return list ? JSON.parse(list) : []
  })

  useEffect(() => {
    localStorage.setItem("TodoListApp", JSON.stringify(todos))
  }, [todos])


  function addNewTask(title) {
    if (title !== "")
    setTodos(current => {
      return [
        ...current,
        {
          id : crypto.randomUUID(),
          title : title,
          isDone : false,
          isEdit : false
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
      return list.sort((a, b) => {
        if (a.isDone === b.isDone)
          return 0
        else if (a.isDone)
          return 1
        return -1
      })
    })
  }

  function deleteTask(id) {
    setTodos(current => {
      return current.filter(task => task.id !== id)
    })
  }

  function editTask(id, title) {
    if (id === null)
      return addNewTask(title)
    setTodos(current => current.map(task => {
      if (task.id === id) {
        return {...task, title}
      }
      return task
    }))
  }
  
  return (
    <>
        <h1 className="header">Todo List</h1>
        <TaskForm onSubmit={addNewTask}/>
        <TodoList todos={todos} toggleIsDone={toggleIsDone} onDelete={deleteTask} onEdit={editTask}/>
    </>
    )
  }
  
  export default TodoApp
  