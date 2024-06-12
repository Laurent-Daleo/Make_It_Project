import React from 'react';
import './user_profile.scss'


const UserProfile = () => {
    return (
        <div className='user_profile_container'>
            <div className="user-content">
                <div className="user-photo"></div>
                <p className="username">Karine</p>
            </div>
            <div className="tasks-notification">
                <span className="bell-notification">
                <lord-icon
                src="https://cdn.lordicon.com/vspbqszr.json"
                trigger="hover"
                state="loop-bell"
                >
                </lord-icon>
                </span>
                <span className="calendar-notification">
                <lord-icon
                src="https://cdn.lordicon.com/abfverha.json"
                trigger="hover"
                >
                </lord-icon>
                </span>
            </div>
        </div>
    );
};

export default UserProfile;