import {ExercisePageDTO} from "../../dto/epage/ExercisePageDTO";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import Exercise from "../exercise/Exercise";


export class ExercisePage implements ExercisePageDTO {
    id: number;
    position: number = -1;
    type: string = AssignableDTO.Type.Undefined;
    dirty?: boolean = false;
    private _p_exercise: Exercise | undefined = undefined;

    constructor(id: number, type: string, position: number, dirty?: boolean) {
        this.id = id;
        this.position = position;
        this.type = type;
        this.dirty = dirty;
    }

    clone(): ExercisePage {
        return new ExercisePage(this.id, this.type, this.position, this.dirty);
    }

    setExercise(exercise: Exercise) {
        this._p_exercise = exercise;
    }
}

export namespace ExercisePage {
    export enum Type {
        RCSentenceType = "RCT"
    }
}
export default ExercisePage;