import {Assignable} from "./assignable/Assignable";
import {MRCAnswerableDTO} from "../dto/assignable/MRCAnswerableDTO";
import MRCAnswerable from "./assignable/MRCAnswerable";

export default class MRCAnswerableItem {
    id: number; choice: string; solution: number;assign: MRCAnswerable;

    constructor(id: number, choice: string, solution: number, assign: MRCAnswerable) {
        this.id = id;
        this.choice = choice;
        this.solution = solution;
        this.assign = assign;
    }
}