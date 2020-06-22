import React from 'react';
import Posts from './POSTS/Posts';

import css from './Profile.module.css'


const Profile = (props) => {
    return (
        <div className={css.profile}>
            <div className={css.profile__avatar_description}>
                <div className={css.avatar}>
                    <img src="http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkPkNB0lYx8RLg1MwLbZYm_qaKTM5SRkZCeTgDn6uOyic" alt="avatar" />
                </div>
                <div className={css.description}>
                    <div className={css.name}>Ахмэт Чурек</div>
                    <div className={css.status}>Мы таджики, мы носители корон </div>
                </div>
            </div>

            <Posts props={props.props}/>
        </div>
    )
}

export default Profile