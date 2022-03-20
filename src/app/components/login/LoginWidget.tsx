import Cookies from "js-cookie";
import React, {useEffect, useState} from "react";
import ExerciseClient from "../../client/ExerciseClient";

export default function LoginWidget() {
    let [authOk,setAuthOk] = useState(false);
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");

    function authenticate(username:string, password:string) {
        let request = "http://localhost:8081/login";
        let csrfToken=  Cookies.get('XSRF-TOKEN');
        if (csrfToken==undefined) csrfToken="";
        fetch(request, {
            mode: "cors", method: "POST", headers: {
                'X-XSRF-TOKEN': csrfToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            credentials: 'include',
            body: "username="+username+"&password="+password
        }).then(
            response => {
                return response.json();
            }
        ).then(
            body => {
                console.log("authentication ok! body: ",body)
            }
        ).catch(
            e => {
                console.error("Error on request: " + request)
                console.log(e)
            }
        )
    }

    useEffect(() => {
        //authenticate();
        ExerciseClient.getUsername().then(
            body => {
                setAuthOk(true);
            }
        ).catch(
            e => {
                setAuthOk(false);
            });
    }, [])

    function login() {
        authenticate(username,password);
    }

    return (
        <div>
            <header>
                <h1>Header</h1>
                <input onChange={(e)=>setUsername(e.target.value)}/>
                <input onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={login}>Login</button>
            </header>
            <main>
            </main>
        </div>
    );
}
