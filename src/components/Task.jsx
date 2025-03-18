import "../../src/card.css"

const TaskCard = ({ task, deleteTask, markAsCompleted }) => {
    const buttonClass = task.completed ? "button-completed" : "button-incomplete"

    return(
        <div className="task-card-container">
            <div className="task-card">
                <h1>{task.text}</h1>
                <button className={buttonClass} onClick={() => markAsCompleted(task.id)}>{task.completed ? "Hecha" : "Completar"}</button>
                <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default TaskCard