import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import MRCAnswerableItem from "../model/MRCAnswerableItem";

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

    static getExercise(exerciseId: number): Promise<ExerciseDTO> {
        return fetch("http://localhost:8081/exercises/" + exerciseId + ".json", {method: "GET"})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO>
            });
    }

    static putAnswerableItem(answerableItemId: number, answerableItem: MRCAnswerableItem): Promise<ExerciseDTO> {
        return fetch("http://localhost:8081/answerable_item/" + answerableItemId + ".json",
            {method: "PUT",
                body: JSON.stringify(answerableItem),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json() as Promise<ExerciseDTO>
            });
    }
}