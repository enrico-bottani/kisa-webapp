import {MRCSentence} from "../epage/MRCSentence";

export class Assignable {
    type: string;
    position:number;
    id:number;
    sentence?: MRCSentence;

    constructor(id:number, type:string,position:number) {
        this.type=type;
        this.position = position;
        this.id = id;
    }

}