import React, {useState} from 'react';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({username: '', password: ''});

    const signUp = (e) => {
        e.preventDefault();
        axios.post('/user/register', {username: user.username, password: user.password})
        .then((res) => {console.log(res)})
        .catch((err) => {console.log(err)});
    };


    return (<div className="register-page">
    <form onSubmit={signUp} className="flex flex-col items-center">
        <label htmlFor="login" className="block text-2xl font-medium text-gray-700 my-3">
            Sign Up
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
            <input type="text" name="username" id="username" value={user.username} onChange={(e) => {setUser({username: e.target.value, password: user.password })}} className="block rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter username"/>
        </div>
        <div className="relative mt-1 rounded-md shadow-sm">
            <input type="text" name="password" id="password" value={user.password} onChange={(e) => {setUser({username: user.username, password: e.target.value })}} className="block rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter password"/>
        </div>
        <button type="submit" className="bg-indigo-400 hover:bg-indigo-500 rounded-md text-white p-3 mt-3">Sign Up</button>
    </form>
</div>);
}

export default Register;
