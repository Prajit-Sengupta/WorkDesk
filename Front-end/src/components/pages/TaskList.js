import '../../assets/css/Content.css';

const TaskList = ({ tasks }) => {
    return (
        <ul className='tasks'>
            { tasks.map( task => (
                <li className="task">
                    <p> {task.title} </p>
                </li>
            ))}
        </ul>
    )
}

export default TaskList;