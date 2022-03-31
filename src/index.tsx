import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";

import AppRoutes from "./app/route/AppRoutes";
import AuthClient from "./app/client/AuthClient";
import ProfileWidget from "./app/components/v2/pages/profile/ProfileWidget";
import LoginWidget from "./app/components/v2/pages/profile/LoginWidget";
import AllSeries from "./app/components/v2/pages/series/AllSeries";
import SeriesItemWidget from "./app/components/v2/pages/series/SeriesItemWidget";
import ExerciseWidget from "./app/components/v2/pages/exercise/ExerciseWidget";
import SentenceWidget from "./app/components/v2/pages/sentence/SentenceWidget";


function RouterWidget() {
    let [userName, setUserName] = useState("");
    useEffect(() => {
        AuthClient.getUsername().then(body => {
            setUserName(body.userName);
        }).catch(() => {
            console.log("unauthenticated")
        })
    }, [])
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<App userName={userName}/>}>
                <Route path={AppRoutes.PROFILE_ROUTE}
                       element={<ProfileWidget/>}/>

                <Route path={AppRoutes.LOGIN_ROUTE}
                       element={<LoginWidget userName={userName}/>}/>
                <Route path={AppRoutes.SERIES}
                       element={<AllSeries />}/>
                <Route path={AppRoutes.SERIES_ID} element={<SeriesItemWidget/>}/>
                <Route path={AppRoutes.EXERCISE_ID} element={<ExerciseWidget/>}>
                    <Route path={AppRoutes.SENTENCE_ID} element={<SentenceWidget/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>);
}

ReactDOM.render(
    <React.StrictMode>
        <RouterWidget/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
