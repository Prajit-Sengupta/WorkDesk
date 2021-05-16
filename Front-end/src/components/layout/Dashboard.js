import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Dashboard.css'

const Dashboard = () => {
    const toggleMenu = (navigation , toggle) => {
        navigation.classList.toggle('active');
        toggle.classList.toggle('active');
    }
        return (
            <div className="dashboard">
                <div className="navigation">
                    <ul>
                        <li>
                            <Link to='/tasks'>
                                <span className="icon"><i className="fas fa-tasks"></i></span>
                                <span className="title">My Tasks</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/reminder'>
                                <span className="icon"><i class="fas fa-stopwatch"></i></span>
                                <span className="title">Reminders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/calendar'>
                                <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                                <span className="title">Calendar</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/setting'>
                                <span className="icon"><i className="fas fa-user-cog"></i></span>
                                <span className="title">Setting</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <span className="icon"><i className="fas fa-sign-out-alt"></i></span>
                                <span className="title">Sign Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="toggle" onClick= { () => toggleMenu( document.querySelector('.navigation'), 
                document.querySelector('.toggle') 
                )}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </div>
        );
}

export default Dashboard