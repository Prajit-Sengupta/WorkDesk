import React, { Fragment } from 'react';

import '../../assets/css/Content.css';

const Reminder = () => {
    function Countdown5(date) {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime(); 
        const g = countDate - now;

        
        const [gap, setGap] = React.useState(g);

        React.useEffect(() => {
            const timer =
            gap > 0 && setInterval(() => setGap(gap - 1000), 1000);
            return () => clearInterval(timer);
        }, [gap]);

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap/day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        console.log(textSecond);
        return (
            <p>
                <span className="day"> {textDay} Days</span>&<span className="time"> {textHour} h {textMinute} m {textSecond} s </span>
            </p>
        )
    }
    function Countdown1(date) {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime(); 
        const g = countDate - now;

        
        const [gap, setGap] = React.useState(g);

        React.useEffect(() => {
            const timer =
            gap > 0 && setInterval(() => setGap(gap - 1000), 1000);
            return () => clearInterval(timer);
        }, [gap]);

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap/day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        console.log(textSecond);
        return (
            <p>
                <span className="day"> {textDay} Days</span>&<span className="time"> {textHour} h {textMinute} m {textSecond} s </span>
            </p>
        )
    }
    function Countdown2(date) {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime(); 
        const g = countDate - now;

        
        const [gap, setGap] = React.useState(g);

        React.useEffect(() => {
            const timer =
            gap > 0 && setInterval(() => setGap(gap - 1000), 1000);
            return () => clearInterval(timer);
        }, [gap]);

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap/day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        console.log(textSecond);
        return (
            <p>
                <span className="day"> {textDay} Days</span>&<span className="time"> {textHour} h {textMinute} m {textSecond} s </span>
            </p>
        )
    }
    function Countdown3(date) {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime(); 
        const g = countDate - now;

        
        const [gap, setGap] = React.useState(g);

        React.useEffect(() => {
            const timer =
            gap > 0 && setInterval(() => setGap(gap - 1000), 1000);
            return () => clearInterval(timer);
        }, [gap]);

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap/day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        console.log(textSecond);
        return (
            <p>
                <span className="day"> {textDay} Days</span>&<span className="time"> {textHour} h {textMinute} m {textSecond} s </span>
            </p>
        )
    }
    function Countdown4(date) {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime(); 
        const g = countDate - now;

        
        const [gap, setGap] = React.useState(g);

        React.useEffect(() => {
            const timer =
            gap > 0 && setInterval(() => setGap(gap - 1000), 1000);
            return () => clearInterval(timer);
        }, [gap]);

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap/day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
        console.log(textSecond);
        return (
            <p>
                <span className="day"> {textDay} Days</span>&<span className="time"> {textHour} h {textMinute} m {textSecond} s </span>
            </p>
        )
    }

    return (
        <Fragment>
            <div className="reminder-list">
                <h1>Reminders</h1>
                <ul className="list">
                    <li>
                        <h4>Meeting 1</h4>
                        { Countdown1('May 20, 2021 00:00:00') }  
                    </li>
                    <li>
                        <h4>Meeting 2</h4>
                        { Countdown2('June 1, 2021 17:00:00') }
                    </li>
                    <li>
                        <h4>Meeting 3</h4>
                        { Countdown3('June 5, 2021 12:00:00') }
                    </li>
                    <li>
                        <h4>Meeting 4</h4>
                        { Countdown4('June 25, 2021 14:00:00') }
                    </li>
                    <li>
                        <h4>Meeting 5</h4>
                        { Countdown5('July 1, 2021 22:00:00') }
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}
export default Reminder