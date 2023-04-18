import { useState } from "react"

function TaskForm ({ onSubmit }) {
  
  const [task, setTask] = useState('')

    function onSubmitForm(e) {
        e.preventDefault()
    
        onSubmit(task)
        setTask("")
    }

    return (
        <form className='new-task-form' onSubmit={onSubmitForm}>
        <div className="form-row">
          <input
              type="text"
              id="item"
              value={task}
              onChange={e => setTask(e.target.value)}
              placeholder="Add a task"
          />
        </div>
      </form>
    )
}

export default TaskForm;