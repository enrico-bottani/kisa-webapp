import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";

export default class ExerciseClient {
   static getExercises(): Promise<ExerciseDTO[]> {
        return fetch("http://localhost:8081/exercises.json", {method: "GET"})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO[]>
            });
    }
}