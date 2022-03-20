import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import ExercisesSelectorWidget from "./app/components/exercise/ExercisesSelectorWidget";
import Editor_ExerciseWidget from "./app/components/editor/Editor_ExerciseWidget";
import Cookies from 'js-cookie';
import LoginWidget from "./app/components/login/LoginWidget";
import Navigation from "./app/components/Navigation";

ReactDOM.render(
    <React.StrictMode>
        <Navigation></Navigation>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="login" element={<LoginWidget/>}/>
                    <Route path="edit/exercises" element={<ExercisesSelectorWidget  editMode={true}/>}/>
                    <Route path="edit/exercises/:exercise" element={<Editor_ExerciseWidget editMode={true}/>} />
                    <Route path="exercises" element={<ExercisesSelectorWidget  editMode={false}/>}/>
                    <Route path="exercises/:exercise" element={<Editor_ExerciseWidget editMode={false}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
