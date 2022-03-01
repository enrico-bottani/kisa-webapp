import {ExercisePageDTO} from "../../dto/epage/ExercisePageDTO";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";


export class ExercisePage implements ExercisePageDTO {
    id:number;
    position: number = -1;
    type: string = AssignableDTO.Type.Undefined;
    dirty?: boolean = false;

    constructor(id:number, type: string,position: number, dirty?: boolean) {
        this.id = id;
        this.position = position;
        this.type = type;
        this.dirty = dirty;
    }

    clone(): ExercisePage {
        return new ExercisePage(this.id,this.type,this.position,  this.dirty);
    }
}
export namespace ExercisePage {
    export enum Type {
        RCSentenceType = "RCT"
    }
}
export default ExercisePage;