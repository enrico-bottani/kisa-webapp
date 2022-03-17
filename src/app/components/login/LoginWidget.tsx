import Cookies from "js-cookie";
import React, {useEffect} from "react";
import ExerciseClient from "../../client/ExerciseClient";

export default function LoginWidget() {
    function getResource() {
        return ExerciseClient.getUsername();
    }

    function authenticate() {
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
            body: "username=Enrico&password="+password
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
            }
        ).catch(
            e => {
                authenticate()
            });
    }, [])

    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>
            <main>

            </main>
        </div>
    );
}
