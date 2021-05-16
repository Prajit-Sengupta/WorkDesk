import '../../assets/css/Content.css';

const TaskList = ({ tasks }) => {

    const handleDelete = (e) => {
        fetch(`http://localhost:8000/todo/task-delete/${e.target.id}`, { method: 'DELETE' })
        .then(() => console.log('Delete successful'));
    }
    return (
        <ul className='tasks'>
            { tasks.map( task => (
                <li className="task">
                    <p> {task.title} <i className='fas fa-times-circle' onClick={handleDelete}></i> </p>
                </li>
            ))}
        </ul>
    )
}

export default TaskList;