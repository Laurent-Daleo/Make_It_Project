import React from 'react';
import Topbar from '../../components/topbar';
import TaskApp from '../../components/taskApp';

const Home = () => {
    return (
        <div className='home_page' >
            <Topbar />
            <TaskApp />
        </div>
    );
};

export default Home;