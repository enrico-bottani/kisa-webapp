import {ExercisePageDTO} from "../../dto/epage/ExercisePageDTO";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";


export class ExercisePage implements ExercisePageDTO {
    position: number = -1;
    type: string = AssignableDTO.Type.Undefined;
    dirty?: boolean = false;

    constructor(position: number, type: string, dirty?: boolean) {
        this.position = position;
        this.type = type;
        this.dirty = dirty;
    }

    clone(): ExercisePage {
        return new ExercisePage(this.position, this.type, this.dirty);
    }
}
export namespace ExercisePage {
    export enum Type {
        RCSentenceType = "RCT"
    }
}
export default ExercisePage;