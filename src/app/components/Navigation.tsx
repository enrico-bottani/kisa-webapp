import React, {useEffect, useState} from "react";
import ExerciseClient from "../client/ExerciseClient";

export default function Navigation() {
    let [username, setUsername] = useState("");

    useEffect(
        () => {
            ExerciseClient.getUsername().then((user) =>
                setUsername(user.userName))
        },[])

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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                    </ul>
                    {username == "" ?
                        <form className="d-flex ">
                            <a className="btn btn-outline-secondary" href={"/login"}>Login</a>
                        </form> : <a href={"/user"} className={"btn btn-secondary"}>{username}</a>}
                </div>

            </div>
        </nav>
    )
}
