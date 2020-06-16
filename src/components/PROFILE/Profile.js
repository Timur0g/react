import React from 'react';
import Posts from './POSTS/Posts';

import c from './Profile.module.css'


const Profile = (props) => {
    console.log(props)
    return (
        <div className={c.profile}>
            <div className={c.profile__avatar_description}>
                <div className={c.avatar}>
                    <img src="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkPkNB0lYx8RLg1MwLbZYm_qaKTM5SRkZCeTgDn6uOyic" alt="avatar" />
                </div>
                <div className={c.description}>
                    <div className={c.name}>Ахмэт Чурек</div>
                    <div className={c.status}>Мы таджики, мы носители корон </div>
                </div>
            </div>

            <Posts text={props.text}/>
        </div>
    )
}

export default Profile