import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import {SeriesDTO} from "../dto/series/SeriesDTO";

export default class ExerciseClient {

    static getExercise(exerciseId: string): Promise<ExerciseDTO> {
        return fetch("http://localhost:8081/api/exercises/" + exerciseId + ".json", {method: "GET"})
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
