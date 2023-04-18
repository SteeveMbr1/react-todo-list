import { useState } from "react"

function TaskForm ({ onSubmit }) {
  
  const [task, setTask] = useState('')

    function onSubmitForm(e) {
        e.preventDefault()
    
        onSubmit(task)
        setTask("")
    }

    return (
        <form className='new-item-form' onSubmit={onSubmitForm}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
            <input
              type="text"
              id="item"
              value={task}
              onChange={e => setTask(e.target.value)}
            />
            <button className="btn">Add</button>
        </div>
      </form>
    )
}

export default TaskForm;