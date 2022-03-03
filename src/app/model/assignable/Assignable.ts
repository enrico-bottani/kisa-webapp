import {MRCSentence} from "../epage/MRCSentence";

export class Assignable {
    type: string;
    position:number;
    id:number;
    _exercisePageId: number;
    _sentenceId:number;

    constructor(id:number, type:string,position:number, _sentenceId:number,_exerciseId:number) {
        this.type=type;
        this.position = position;
        this.id = id;
        this._sentenceId = _sentenceId;
        this._exercisePageId = _exerciseId;
    }

}