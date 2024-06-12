import React from 'react';
import './search_task.scss'

const SearchTask = () => {
    return (
        <div className='search_task-content'>
            <div className="search_task_icon">
            <lord-icon
            src="https://cdn.lordicon.com/kkvxgpti.json"
            trigger="hover"
            colors="primary:#272d2d"
            >
            </lord-icon>
            </div>
            <p className="title_search_task">Rechercher</p>
        </div>
    );
};

export default SearchTask;