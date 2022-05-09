import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import StudyMaterial from './Pages/StudyMaterial';
import BuyCourses from './Pages/BuyCourses';
import Signup from './Pages/signup/Signup';
import Login from './Pages/Login'
import AboutUs from './Pages/aboutus/AboutUs';

ReactDOM.render(

<Router>
    <Routes>
        <Route path="/"  element={<App/>} />
        <Route path="/studymaterial"  element={<StudyMaterial/>} />
        <Route path="/aboutus"  element={<AboutUs/>} />
        <Route path="/signup"  element={<Signup />} />
        <Route path="/login"  element={<Login/>} />

    </Routes>
</Router>

, document.getElementById('root'));
