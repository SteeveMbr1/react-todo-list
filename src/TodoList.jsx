import Task from "./Task";


function TodoList ({todos, toggleIsDone, onDelete, onEdit}) {

    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(task => {
          return (
            <Task
                key={task.id}
                task = { task }
                toggleIsDone={toggleIsDone}
                onDelete={onDelete}
                onEdit={onEdit}
            />
          )
        })}
      </ul>
    )
}

export default TodoList;