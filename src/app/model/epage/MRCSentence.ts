import ExercisePage from "./ExercisePage";
import {MRCSentenceDTO} from "../../dto/epage/MRCSentenceDTO";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import JSONDeepCopy from "../../util/JSONDeepCopy";
import {AnswerIndexer} from "../AnswerIndexer";
import {Assignable} from "../assignable/Assignable";


export class MRCSentence extends ExercisePage implements MRCSentenceDTO {
    assignables: Assignable[] = [];
    answerMap: AnswerIndexer[] = [];
    type= ExercisePage.Type.RCSentenceType;
    constructor(assignables: Assignable[], id:number,type: string,position: number,parentId:number,  dirty?: boolean) {
        super(id, type,position, parentId,dirty);
        this.assignables = assignables;
        for (let i = 0; i < assignables.length; i++) {
            if (assignables[i].type == AssignableDTO.Type.RCAnswerable) {
                this.answerMap.push({ index: i } as AnswerIndexer)
            }

        }
    }
    static EMPTY(): MRCSentence{
        return new MRCSentence([],-1,AssignableDTO.Type.Undefined,-1,-1,false);
    }
    clone(): MRCSentence {
        return new MRCSentence(JSONDeepCopy.deepCopy(this.assignables),this.id,this.type,this.position, this.parentId, this.dirty)
    }
}
