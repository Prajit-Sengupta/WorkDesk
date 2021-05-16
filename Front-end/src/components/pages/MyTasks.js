import React, { Fragment, useEffect, useState } from 'react';
import TaskList from './TaskList';
import '../../assets/css/Content.css';

const MyTasks = () => {
    const [tasks, setTasks] = useState(null);
    const [newTask, setnewTask] = useState('');
    
    useEffect(() => {
        fetch('http://localhost:8000/todo/task-list/')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setTasks(data);
        })


    },[])

    const handleChange = (e) => {
        setnewTask(e.target.value);
    }

    const handleSubmit = (e) => {
       e.preventDefault() 
        fetch('http://localhost:8000/todo/task-create/', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ title: newTask, completed: true })
        })
        .then((res) => {
            return res.json();
        })
        .then(data => {
            setTasks(
                [
                    {
                        title: newTask,
                        id:tasks.length+1
                    },
                    ...tasks,
                   
                ]
            )
            console.log(data);
        })
       
    }


    return (
        <Fragment>
            <h1>My Tasks</h1>
            <form className='task-form'>
                <label className='form-label'>Add New Task</label>

                <input type="text" id='content' value={newTask} onChange={handleChange}></input>
                <button className='btn-submit' onClick={handleSubmit}>Add Task</button>

      

               

            </form>
            {tasks && <TaskList tasks={tasks} />}
        </Fragment>
    )
}
export default MyTasks