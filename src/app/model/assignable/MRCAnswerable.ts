import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import {Assignable} from "./Assignable";
import {MRCAnswerableDTO} from "../../dto/assignable/MRCAnswerableDTO";

export default class MRCAnswerable extends Assignable implements MRCAnswerableDTO {
    answerableItems: any[];
    constructor(id:number, type:string,position:number,answerableItems:any[]) {
        super(id, type,position);
        this.answerableItems = answerableItems;
    }
}