import React, { Fragment, useEffect, useState } from 'react';
import TaskList from './TaskList';
import '../../assets/css/Content.css';

const MyTasks = () => {
    const [tasks, setTasks] = useState(null);
    const [newTask, setnewTask] = useState('');
    const [completed, setCompleted] = useState('false');
    
    useEffect(() => {
        fetch('http://localhost:8000/tasks')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setTasks(data);
        })
    },[])

    const handleChange = (e) => {
        setnewTask(e.target.value);
        setCompleted('true');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ title: newTask, completed: completed })
        }).then((res) => {
            console.log(res.status);
        })
    }
    
    return (
        <Fragment>
            <h1>My Tasks</h1>
            <form className='task-form' onSubmit = {handleSubmit}>
                <label className='form-label'>Add New Task</label>
                <input type="text" id='content' value={newTask} completed={completed} onChange={handleChange}></input>
                <button className='btn-submit' type='submit'>Add Task</button>
            </form>
            {tasks && <TaskList tasks={tasks} />}
        </Fragment>
    )
}
export default MyTasks