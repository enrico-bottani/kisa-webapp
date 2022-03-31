import {UserDTO} from "../dto/auth/UserDTO";
import Cookies from "js-cookie";

export default class AuthClient{
    static getUsername(): Promise<UserDTO> {
        return fetch("http://localhost:8081/api/auth/user.json", {
            mode:"cors",
            method: "GET",
            credentials: 'include'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<UserDTO>
            });
    }

    static login(username: string, password: string):Promise<any> {
        let request = "http://localhost:8081/login";
        let csrfToken = Cookies.get('XSRF-TOKEN');
        if (csrfToken == undefined) csrfToken = "";
        return fetch(request, {
            mode: "cors", method: "POST", headers: {
                'X-XSRF-TOKEN': csrfToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            credentials: 'include',
            body: "username=" + username + "&password=" + password
        }).then(
            response => {
                return response.json();
            }
        )
    }

    static logout():Promise<any> {
        let request = "http://localhost:8081/logout";
        let csrfToken = Cookies.get('XSRF-TOKEN');
        if (csrfToken == undefined) csrfToken = "";
        return fetch(request, {
            mode: "cors", method: "POST", headers: {
                'X-XSRF-TOKEN': csrfToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            credentials: 'include'
        }).then(
            response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.body;
            }
        )
    }
}
