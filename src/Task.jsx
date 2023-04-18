import { useState } from "react";

function Task ({task, toggleIsDone, onDelete, onEdit}) {
    
    const [title, setTitle] = useState(task.title)
    const [isEdit, setIsEdit] = useState(task.isEdit || false)
    
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
                        <button className="btn btn-warning" onClick={() => setIsEdit(!isEdit)} >Save</button>
                <button className="btn btn-danger" onClick={() => onDelete(task.id)} >Delete</button>
            </li>
        )
    else
        return (
            <li>
                <label>
                    <input type="checkbox" checked={task.isDone} onChange={e => toggleIsDone(task.id, e.target.checked)} />
                    {task.title}
                </label>
                <div className="ctrl">
                    <button className="btn btn-warning" onClick={() => setIsEdit(!isEdit)} >Edit</button>
                    <button className="btn btn-danger" onClick={() => onDelete(task.id)} >Delete</button>
                </div>
            </li>
        )
}

export default Task;