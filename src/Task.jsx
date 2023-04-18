
function Task ({title, isDone, id, toggleIsDone, deleteTask}) {
    return (
        <li>
            <label>
            <input type="checkbox" checked={isDone} onChange={e => toggleIsDone(id, e.target.checked) }/>{title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTask(id)} >Delete</button>
        </li>
    )
}

export default Task;