import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const User = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    
    const getUserList = () => {
        axios({
            method: 'get',
            url: '/user',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    };

    useEffect(getUserList, [])

    return (
        <div className="user-page">
            USER
        </div>
    );
}

export default User;
