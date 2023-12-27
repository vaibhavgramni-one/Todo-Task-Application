export const DeleteTask = ({taskId , deleteTask}) => {
    return (
        <button className="delete-task-button" onClick={() => deleteTask(taskId)}>X</button>
    )
}