import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Outlet} from "react-router-dom";
import Navigation from "./app/components/Navigation";

function App() {
    return (
        <div className="App">
            <header>
                <link
                    href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"/>
            </header>
            <Navigation/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default App;
