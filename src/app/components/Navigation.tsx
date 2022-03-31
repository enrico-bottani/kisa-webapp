import React, {useEffect, useState} from "react";
import ExerciseClient from "../client/ExerciseClient";
import AppRoutes from "../route/AppRoutes";

interface Props{
    userName:string;
}

export default function Navigation(props:Props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={AppRoutes.SERIES}>Series</a>
                        </li>
                    </ul>
                    {props.userName == "" ?
                        <form className="d-flex ">
                            <a className="btn btn-outline-secondary" href={"/login"}>Login</a>
                        </form> : <a href={"/user"} className={"btn btn-secondary"}>{props.userName}</a>}
                </div>

            </div>
        </nav>
    )
}
