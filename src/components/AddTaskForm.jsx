import { useState } from "react";

const CreateTask = ({ addTask }) => {
    const [ taskForm, setTaskForm ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(taskForm)
        setTaskForm("")
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={taskForm}
                placeholder="Nueva Tarea"
                onChange={(e) => setTaskForm(e.target.value)}  />
            </form>
        </>
    )
}

export default CreateTask