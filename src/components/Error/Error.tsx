import React from 'react';
import error from '../../assets/images/error.gif'
import s from'./Error.module.css'
const Error = () => {
    return (
        <div>
            <img src={error} alt="err"/>
            <p className={s.errorText}>Page doesn't exist</p>
        </div>
    );
};

export default Error;