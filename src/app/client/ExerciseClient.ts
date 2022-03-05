import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import MRCAnswerableItem from "../model/MRCAnswerableItem";
import STRConstant from "../model/assignable/STRConstant";

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
    static postNewEmptyExercisePage(exerciseId: number) {

        return fetch("http://localhost:8081/exercises/" + exerciseId + "/mrc_sentence.json",
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
        return fetch("http://localhost:8081/answerable_item/" + answerableItemId + ".json",
            {
                method: "PUT",
                body: JSON.stringify(answerableItem),
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

    static deleteAnswerableItem(answerableItemId: number) {
        return fetch("http://localhost:8081/answerable_item/" + answerableItemId + ".json",
            {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response;
            });
    }

    static putSTRConstant(id: number, strConstant: STRConstant) {
        return fetch("http://localhost:8081/str_constant/" + id + ".json",
            {
                method: "PUT",
                body: JSON.stringify(strConstant),
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

    static postNewAnswerableItem(id: number) {
        return fetch("http://localhost:8081/answerable/" + id + "/answerable_item.json",
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


    static postNewAssignableBySentenceId(sentenceId: number) {
        return fetch("http://localhost:8081/sentence/" + sentenceId + "/assignable.json",
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


}
