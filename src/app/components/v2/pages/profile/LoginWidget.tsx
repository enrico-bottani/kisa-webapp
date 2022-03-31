import Cookies from "js-cookie";
import React, {useEffect, useState} from "react";
import AuthClient from "../../../../client/AuthClient";
import AppRoutes from "../../../../route/AppRoutes";

interface Props {
    userName: string;
}

export default function LoginWidget(props: Props) {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    function authenticate() {
        // Chiedo di autenticarmi
        return AuthClient.login(username, password).then(
            () => {
                console.log("authentication ok!")
            }
        ).then(() => {
            // Se la prima fase è andata a buon fine recupero il nome utente
            AuthClient.getUsername().then(body => {
                window.location.replace(AppRoutes.PROFILE_ROUTE);
            })
        }).catch(
            e => {
                console.log("Auth fail");
            }
        )
    }

    useEffect(() => {
        AuthClient.getUsername().then(body => {
            if (body.userName !== "anonymousUser")
                window.location.replace(AppRoutes.PROFILE_ROUTE);
        })
    }, [])

    return (
        <div>
            <header>
            </header>
            <main>
                <div className="container">
                    <input onChange={(e) => setUsername(e.target.value)}/>
                    <input onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={() => authenticate()}>Login</button>
                </div>
            </main>
        </div>
    );
}
