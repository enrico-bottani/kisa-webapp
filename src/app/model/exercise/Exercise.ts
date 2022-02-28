import {ExercisePage} from "../epage/ExercisePage";
import {ExerciseDTO} from "../../dto/exercise/ExerciseDTO";


class ExerciseDTOImpl_Builder {
    id: number = -1;
    title: string = "";
    selected: number = 0;
    pages: ExercisePage[] = [];

    public setId(id: number): ExerciseDTOImpl_Builder {
        this.id = id;
        return this;
    }
    public setTitle(title: string): ExerciseDTOImpl_Builder {
        this.title = title;
        return this;
    }
    public setSelected(selected: number): ExerciseDTOImpl_Builder {
        this.selected = selected;
        return this;
    }
    public setTodo(todos: ExercisePage[]): ExerciseDTOImpl_Builder {
        this.pages = todos;
        return this;
    }

    build(): Exercise {
        return new Exercise(this.id, this.title, this.selected, this.pages);
    }
}

// Implementa ExerciseDTO, se devo ritornare il tipo di dato è corretto
export class Exercise implements ExerciseDTO {
    id: number = -1;
    title: string = "";
    selected: number = 0;
    pages: ExercisePage[] = [];

    constructor(id: number, title: string, selected: number, todos: ExercisePage[]) {
        this.id = id;
        this.title = title;
        this.selected = selected;
        this.pages = todos;
    }

    clone(): Exercise {
        return new Exercise(this.id, this.title, this.selected, JSON.parse(JSON.stringify(this.pages)));

    }

    public static builder(): ExerciseDTOImpl_Builder {
        return new ExerciseDTOImpl_Builder();
    }
}

export default Exercise;