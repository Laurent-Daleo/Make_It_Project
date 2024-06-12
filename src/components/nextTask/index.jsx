import React from 'react';
import './next_task.scss'
import next from './img/next.svg'

const NextTask = () => {
    return (
        <div className='next_task_content'>
            <img src={next} alt="icone prochainement" />
            <p className="title_next">Prochainement</p>
        </div>
    );
};

export default NextTask;