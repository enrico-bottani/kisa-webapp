import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import STRConstant from "../model/assignable/STRConstant";
import {UserDTO} from "../dto/auth/UserDTO";
import {SeriesDTO} from "../dto/series/SeriesDTO";

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

    static getExercise(exerciseId: string): Promise<ExerciseDTO> {
        return fetch("http://localhost:8081/api/exercises/" + exerciseId + ".json", {method: "GET"})
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


    static getAllAuthors(): Promise<UserDTO[]>  {
        return fetch("http://localhost:8081/api/authors.json",
            {
                method: "GET",
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
                return response.json();
            });
    }

    static getAuthorsSeries(author:string): Promise<any>  {
        return fetch("http://localhost:8081/api/authors/"+author+"/series.json",
            {
                method: "GET",
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
                return response.json();
            });
    }

    static getAllSeriesByUser(): Promise<SeriesDTO[]>  {
        return fetch("http://localhost:8081/api/user/Enrico/series.json",
            {
                method: "GET",
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
                return response.json();
            });
    }

    static getSeriesById(seriesId:string): Promise<SeriesDTO>  {
        return fetch("http://localhost:8081/api/series/"+seriesId+".json",
            {
                method: "GET",
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
                return response.json();
            });
    }

    static getSeriesEditable(seriesId: string) {
        return fetch("http://localhost:8081/api/series/"+seriesId+"/editable.json",
            {
                method: "GET",
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
                return response.json();
            });
    }

    static getExerciseEditable(exerciseId: string) {
        return fetch("http://localhost:8081/api/exercises/"+exerciseId+"/editable.json",
            {
                method: "GET",
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
                return response.json();
            });
    }
    static getSentenceById(exerciseId: string) {
        return fetch("http://localhost:8081/api/sentences/"+exerciseId+".json",
            {
                method: "GET",
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
                return response.json();
            });
    }
}
