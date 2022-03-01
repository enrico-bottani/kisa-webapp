import ExercisePage from "./ExercisePage";
import {RCSentenceDTO} from "../../dto/epage/MRCSentenceDTO";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import JSONDeepCopy from "../../util/JSONDeepCopy";
import {AnswerIndexer} from "../AnswerIndexer";
import {Assignable} from "../assignable/Assignable";

export class RCSentence_Builder {
    assignables: Assignable[] = [];
    answerMap: AnswerIndexer[] = [];
    position: number = 0;
    type: string = ExercisePage.Type.RCSentenceType;
    dirty?: boolean = false;
    id:number = -1;

    setId(id:number){
        this.id = id;
        return this;
    }
    setAssignables(assignables: Assignable[]): RCSentence_Builder {
        this.assignables = assignables;
        return this;
    }
    setPosition(position: number): RCSentence_Builder {
        if (position === undefined) return this;
        this.position = position;
        return this;
    }
    setType(type: string): RCSentence_Builder {
        if (type === undefined) return this;
        this.type = type;
        return this;
    }
    setDirty(dirty: boolean): RCSentence_Builder {
        if (dirty === undefined) return this;
        this.dirty = dirty;
        return this;
    }
    build(): MRCSentence {
        return new MRCSentence(this.assignables, this.id,this.type,this.position,  this.dirty);
    }
}

export class MRCSentence extends ExercisePage implements RCSentenceDTO {
    assignables: Assignable[] = [];
    answerMap: AnswerIndexer[] = [];
    type= ExercisePage.Type.RCSentenceType;
    constructor(assignables: Assignable[], id:number,type: string,position: number,  dirty?: boolean) {
        super(id, type,position, dirty);
        this.assignables = assignables;
        for (let i = 0; i < assignables.length; i++) {
            if (assignables[i].type == AssignableDTO.Type.RCAnswerable) {
                this.answerMap.push({ index: i } as AnswerIndexer)
            }

        }
    }
    static builder() {
        return new RCSentence_Builder();
    }
    clone(): MRCSentence {
        return new MRCSentence(JSONDeepCopy.deepCopy(this.assignables),this.id,this.type,this.position,  this.dirty)
    }
}
