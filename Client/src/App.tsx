import React from 'react';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
