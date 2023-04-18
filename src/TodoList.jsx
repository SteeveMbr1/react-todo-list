import Task from "./Task";


function TodoList ({todos, toggleIsDone, deleteTask}) {

    return (
        <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(task => {
          return (
            <Task
                key={task.id}
                {...task}
                toggleIsDone={toggleIsDone}
                deleteTask={deleteTask}
            />
          )
        })}
      </ul>
    )
}

export default TodoList;