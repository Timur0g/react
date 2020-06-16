import React from 'react';
import Posts from './POSTS/Posts';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__avatar_description">
                <div className="avatar">
                    <img src="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkPkNB0lYx8RLg1MwLbZYm_qaKTM5SRkZCeTgDn6uOyic" alt="avatar" />
                </div>
                <div className="description">
                    <div className="name">Ахмэт Чурек</div>
                    <div className="status">Мы таджики, мы носители корон </div>
                </div>
            </div>
            
            <Posts />
        </div>
    )
}

export default Profile