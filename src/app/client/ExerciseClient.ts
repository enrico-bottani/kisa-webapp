import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import MRCAnswerableItem from "../model/MRCAnswerableItem";
import STRConstant from "../model/assignable/STRConstant";
import Cookies from "js-cookie";
import {UserDTO} from "../dto/auth/UserDTO";

export default class ExerciseClient {
    static getExercises(): Promise<ExerciseDTO[]> {
        return fetch("http://localhost:8081/api/exercises.json", {method: "GET"})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO[]>
            });
    }

    static getExercise(exerciseId: number): Promise<ExerciseDTO> {
        return fetch("http://localhost:8081/api/exercises/" + exerciseId + ".json", {method: "GET"})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO>
            });
    }

    static postNewEmptyExercisePage(exerciseId: number) {

        return fetch("http://localhost:8081/api/exercises/" + exerciseId + "/mrc_sentence.json",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO>
            });
    }

    static putAnswerableItem(answerableItemId: number, answerableItem: MRCAnswerableItem): Promise<ExerciseDTO> {
        return fetch("http://localhost:8081/api/answerable_item/" + answerableItemId + ".json",
            {
                method: "PUT",
                body: JSON.stringify(answerableItem),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO>
            });
    }

    static deleteAnswerableItem(answerableItemId: number) {
        return fetch("http://localhost:8081/api/answerable_item/" + answerableItemId + ".json",
            {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response;
            });
    }

    static putSTRConstant(id: number, strConstant: STRConstant) {
        return fetch("http://localhost:8081/api/str_constant/" + id + ".json",
            {
                method: "PUT",
                body: JSON.stringify(strConstant),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO>
            });
    }

    static postNewAnswerableItem(id: number) {
        return fetch("http://localhost:8081/api/answerable/" + id + "/answerable_item.json",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO>
            });
    }


    static postNewAssignableBySentenceId(sentenceId: number) {
        return fetch("http://localhost:8081/api/mrc_sentence/" + sentenceId + "/assignable.json",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO>
            });
    }


    static deleteExercisePage(sentenceId: number) {
        return fetch("http://localhost:8081/api/mrc_sentence/" + sentenceId + ".json",
            {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response;
            });
    }

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
}
