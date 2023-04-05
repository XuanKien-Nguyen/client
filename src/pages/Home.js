import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (<div className="home-page flex gap-4 justify-center mt-10">
            <button className="bg-indigo-400 hover:bg-indigo-500 rounded-md p-3 text-white" onClick={() => {navigate('/login')}}>Go to Log In</button>
            <button className="bg-indigo-400 hover:bg-indigo-500 rounded-md p-3 text-white" onClick={() => {navigate('/register')}}>Go to Sign Up</button>
    </div>);
}

export default Home;
