import React, {useEffect, useState} from "react";
import AuthClient from "../../../../client/AuthClient";
import AppRoutes from "../../../../route/AppRoutes";

function logout() {
    AuthClient.logout().then(() => {
        alert("logout ok.")
    }).catch((e) => {
        console.error(e);
        alert("logout error")
    });
}


export default function ProfileWidget() {
    let [userName, setUserName] = useState("");
    useEffect(() => {
        AuthClient.getUsername().then(body => {
            setUserName(body.userName);
        }).catch(() => {
            window.location.replace(AppRoutes.LOGIN_ROUTE);
        })
    }, [])
    return (
        <div className={"container mt-4"}>
            <div className="row">
                <div className="col-12">
                    <h1>Welcome {userName}</h1>
                </div>
                <hr />
                <div className="col">
                    <button className={"btn btn-secondary"} onClick={() => logout()}>Logout</button>
                </div>
            </div>
        </div>
    )
}
