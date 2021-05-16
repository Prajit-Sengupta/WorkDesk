import '../../assets/css/Content.css';


const TaskList = ({ tasks, setTasks }) => {

    const handleDelete = (e) => {
        console.log(e.target.id)
        const copy= [...tasks];
        setTasks(copy.filter(t=>t.id!=e.target.id))
        // fetch(`http://localhost:8000/todo/task-delete/${e.target.id}`, { method: 'DELETE' })
        // .then(() =>
        //  {  tasks.splice(e.target.id,1)
        //      console.log('Delete successful')});
    }
    return (
        <ul className='tasks'>
            { tasks.map( (task,index) => (
                <li className="task">
                    <p> {task.title} <i id ={task.id} className='fas fa-times-circle' onClick={(e)=>handleDelete(e)}></i> </p>
                </li>
            ))}
        </ul>
    )
}

export default TaskList;