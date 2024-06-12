import React from 'react';
import './today_task.scss'
import today from './img/today.svg'


const TodayTask = () => {
    return (
        <div className='today_task_content'>
            <img src={today} alt="" />
            <p className="title_today">Aujourd'hui</p>
        </div>
    );
};

export default TodayTask;