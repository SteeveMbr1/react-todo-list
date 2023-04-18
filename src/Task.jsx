import { useState } from "react";

function Task ({task, toggleIsDone, deleteTask, onEdit}) {
    
    const [title, setTitle] = useState(task.title)
    const [isEdit, setIsEdit] = useState(false)
    
    function saveTask() {
        setIsEdit(!isEdit)
        onEdit(task.id, title)
    }

    function onSubmitForm(e) {
        e.preventDefault()
        saveTask()
    }

    if (isEdit)
        return (
            <li>
                <form onSubmit={onSubmitForm}>
                    <label className="">
                        <input type="checkbox" checked={task.isDone} onChange={e => toggleIsDone(task.id, e.target.checked) }/>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} onBlur={() => saveTask()} autoFocus/>
                    </label>
                </form>
                <button className="btn btn-danger" onClick={() => deleteTask(task.id)} >Delete</button>
            </li>
        )
    else
        return (
            <li>
                <label>
                <input type="checkbox" checked={task.isDone} onChange={e => toggleIsDone(task.id, e.target.checked) }/>{task.title}
                </label>
                <button className="btn btn-warning" onClick={() => setIsEdit(!isEdit)} >Edit</button>
                <button className="btn btn-danger" onClick={() => deleteTask(task.id)} >Delete</button>
            </li>
        )
}

export default Task;