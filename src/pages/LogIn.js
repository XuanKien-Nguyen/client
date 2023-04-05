import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const LogIn = () => {
    const navigate  = useNavigate();
    const [user, setUser] = useState({username: '', password: ''});

    const logIn = (e) => {
        e.preventDefault();
        axios.post('/user/login', {username: user.username, password: user.password})
        .then((res) => {
            if(res && res.status === 200) {
                localStorage.setItem('user', res.data.user.username);
                localStorage.setItem('token', res.data.user.token);
                navigate('../user');
            }
        })
        .catch((err) => {console.log(err)})
    };

    return (
        <div className="login-page">
            <form onSubmit={logIn} className="flex flex-col items-center">
                <label htmlFor="login" className="block text-2xl font-medium text-gray-700 my-3">
                    Log In
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input type="text" name="username" id="username" value={user.username} onChange={(e) => {setUser({username: e.target.value, password: user.password })}} className="block rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter username"/>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input type="text" name="password" id="password" value={user.password} onChange={(e) => {setUser({username: user.username, password: e.target.value })}} className="block rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter password"/>
                </div>
                <button type="submit" className="bg-indigo-400 hover:bg-indigo-500 rounded-md text-white p-3 mt-3">Submit</button>
            </form>
        </div>
    );
}

export default LogIn;
