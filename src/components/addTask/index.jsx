import React from 'react';
import './add_task.scss'
import  add  from './img/add.svg'

const AddTask = () => {
    return (
        <div className='add_task_content'>
            <div className="icon_add_task">
            <img className='add_icon' src={add} alt="icone ajout de tache" />
            </div>
            <p className="title_add_task">Ajoutez une tâche</p>
        </div>
    );
};

export default AddTask;