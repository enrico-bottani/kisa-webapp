import {MRCSentence} from "../epage/MRCSentence";

export class Assignable {
    type: string;
    position:number;
    id:number;
    _parentId: number;

    constructor(id:number, type:string,position:number, _parentId:number) {
        this.type=type;
        this.position = position;
        this.id = id;
        this._parentId = _parentId;
    }

}