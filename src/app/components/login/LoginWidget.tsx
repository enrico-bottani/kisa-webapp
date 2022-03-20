import Cookies from "js-cookie";
import React, {useEffect, useState} from "react";
import ExerciseClient from "../../client/ExerciseClient";

export default function LoginWidget() {
    let [authOk,setAuthOk] = useState(false);
    function getResource() {
        return ExerciseClient.getUsername();
    }

    function authenticate(username:string) {
        let request = "http://localhost:8081/login";
        let password = "Password"
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
        getResource().then(
            body => {
                console.log(body)
                setAuthOk(true);
            }
        ).catch(
            e => {
                setAuthOk(false);
                authenticate("Enrico");
            });
    }, [])

    let auth = <p>Not logged</p>
    if (authOk){
         auth = <p>Logged</p>
    }
    return (
        <div>
            <header>
                <h1>Header</h1>
                {auth}
            </header>
            <main>
            </main>
        </div>
    );
}
