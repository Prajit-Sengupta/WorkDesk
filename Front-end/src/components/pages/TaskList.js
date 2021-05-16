import '../../assets/css/Content.css';

const TaskList = ({ tasks }) => {
    return (
        <ul className='tasks'>
            { tasks.map( task => (
                <li className="task">
                    <p>{task.id} {task.title} {task.completed}</p>
                </li>
            ))}
        </ul>
    )
}

export default TaskList;