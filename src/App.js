import './App.css';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import User from './pages/User';
import {Route, Routes, Navigate} from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="/*"
                    element={<NotFound/>}/>
                <Route path="/login"
                    element={<LogIn/>}/>
                <Route path="/register"
                    element={<Register/>}/>
                <Route path="/user"
                    element={<User/>}/>
            </Routes>
        </div>
    );
}

export default App;
