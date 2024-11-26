import React from 'react';
import { useState } from 'react';
import './add_task.scss'
import  add  from './img/add.svg'
import  clock  from './img/clock.svg'

const AddTask = () => {
    const [showInput, setShowInput] = useState(false);
    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
        console.log(task);
    };

    return (
        <div className='add_task_content'>
            {!showInput ? (
                <>
            <div className="icon_add_task"onClick={() => setShowInput(true)}>
            <img className='add_icon' src={add} alt="icone ajout de tache" />
            </div>
            <p className="title_add_task">Ajoutez une tâche</p>
            </>
            ) : (
                <form className="input_add_task">
                    <input
                    className='user_add_task'
                    type="text"
                    value={task}
                    onChange={handleInputChange}
                    placeholder="Ajoutez votre tâche"
                    />
                    <button  className='btn_add_task' type='submit'>Ajouter</button>
                    <button  className='btn_add_date' type='date'>
                    <img className='clock_icon' src={clock} alt="icone holorge" />
                    </button>
                </form>
            
        )}
        </div>
    );
};

export default AddTask;