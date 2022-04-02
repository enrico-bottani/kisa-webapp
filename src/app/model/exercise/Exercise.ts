import {ExercisePage} from "../epage/ExercisePage";
import {ExerciseDTO} from "../../dto/exercise/ExerciseDTO";



// Implementa ExerciseDTO, se devo ritornare il tipo di dato è corretto
export class Exercise implements ExerciseDTO {
    id: number = -1;
    title: string = "";
    selected: number = 0;
    sentences: ExercisePage[] = [];

    constructor(id: number, title: string, selected: number, todos: ExercisePage[]) {
        this.id = id;
        this.title = title;
        this.selected = selected;
        this.sentences = todos;
    }

    clone(): Exercise {
        return new Exercise(this.id, this.title, this.selected, this.sentences);

    }

    public setPages(pages: ExercisePage[]):Exercise{
        this.sentences = pages;
        return this;
    }
}

export default Exercise;
