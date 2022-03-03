import {MRCSentence} from "../epage/MRCSentence";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";

export class Assignable implements AssignableDTO{
    type: string;
    position:number;
    id:number;

    constructor(id:number, type:string,position:number) {
        this.type=type;
        this.position = position;
        this.id = id;
    }

    _p_sentence: MRCSentence | null = null;
    setParentSentence(mrcSentence:MRCSentence):Assignable{
        this._p_sentence = mrcSentence;
        return this;
    }
}