import ExercisePage from "./ExercisePage";
import {RCSentenceDTO} from "../../dto/epage/MRCSentenceDTO";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import JSONDeepCopy from "../../util/JSONDeepCopy";
import {AnswerIndexer} from "../AnswerIndexer";

export class RCSentence_Builder {
    assignables: AssignableDTO[] = [];
    answerMap: AnswerIndexer[] = [];
    position: number = 0;
    type: string = ExercisePage.Type.RCSentenceType;
    dirty?: boolean = false;
    setAssignables(assignables: AssignableDTO[]): RCSentence_Builder {
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
        return new MRCSentence(this.assignables, this.position, this.type, this.dirty);
    }
}

export class MRCSentence extends ExercisePage implements RCSentenceDTO {
    assignables: AssignableDTO[] = [];
    answerMap: AnswerIndexer[] = [];
    type= ExercisePage.Type.RCSentenceType;
    constructor(assignables: AssignableDTO[], position: number, type: string, dirty?: boolean) {
        super(position, type, dirty);
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
        return new MRCSentence(JSONDeepCopy.deepCopy(this.assignables),this.position, this.type, this.dirty)
    }
}
