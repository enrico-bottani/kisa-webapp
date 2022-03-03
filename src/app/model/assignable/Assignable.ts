import {MRCSentence} from "../epage/MRCSentence";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";

export class Assignable implements AssignableDTO{
    type: string;
    position:number;
    id:number;
    _exercisePageId: number;
    _exerciseId:number;

    constructor(id:number, type:string,position:number, _sentenceId:number,_exerciseId:number) {
        this.type=type;
        this.position = position;
        this.id = id;
        this._exerciseId = _exerciseId;
        this._exercisePageId = _sentenceId;
    }


}