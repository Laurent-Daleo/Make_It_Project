import React from 'react';
import './task_app.scss'
import background from './img/background_img.jpg'
import UserProfile from '../userProfile';
import AddTask from '../addTask';
import SearchTask from '../searchTask';
import TodayTask from '../todayTask';
import NextTask from '../nextTask';

const TaskApp = () => {
    return (
        <section className='app_container' >
                <div className='background_content' >
                    <img  className='background_img' src={background} alt="imge de fond de Make It" />
                    <h2 className='background_title' >Make It La to do list gratuite et intuitive</h2>
                </div>
                <div className="app-content">
            
                    <div className="task-functions-content">
                        <UserProfile />
                        <AddTask />
                        <SearchTask/>
                        <TodayTask/>
                        <NextTask/>
                        <hr className="separation" />
                        <div className="last-tasks-info"></div>
                        <div className="display-tasks"></div>
                    </div>
                    <div className="display_task"></div>
                </div>
        </section>

    );
};

export default TaskApp;
