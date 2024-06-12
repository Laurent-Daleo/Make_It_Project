import React from 'react';
import './last_task.scss'

const LastTasks = () => {
    return (
        <div className='last_task_content'>
            <div className="last_task_icon">
            <lord-icon
            src="https://cdn.lordicon.com/vdjwmfqs.json"
            trigger="hover"
            colors="primary:#ffffff"
            >
            </lord-icon>
            <p className="title_last">Dernières tâches</p>
            </div>
        </div>
    );
};

export default LastTasks;