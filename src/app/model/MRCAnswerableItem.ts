import {Assignable} from "./assignable/Assignable";
import {MRCAnswerableDTO} from "../dto/assignable/MRCAnswerableDTO";
import MRCAnswerable from "./assignable/MRCAnswerable";
import MRCAnswerableItemDTO from "../dto/item/MRCAnswerableItemDTO";

export default class MRCAnswerableItem implements MRCAnswerableItemDTO{
    id: number; choice: string; solution: number;

    constructor(id: number, choice: string, solution: number) {
        this.id = id;
        this.choice = choice;
        this.solution = solution;
    }
    public clone():MRCAnswerableItem{
        return new MRCAnswerableItem(this.id, this.choice, this.solution);
    }
}