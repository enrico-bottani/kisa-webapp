import {Assignable} from "./assignable/Assignable";
import {MRCAnswerableDTO} from "../dto/assignable/MRCAnswerableDTO";

export default class MRCAnswerableItem {
    id: number; choice: string; solution: number;
    constructor(id: number, choice: string, solution: number) {
        this.id = id;
        this.choice = choice;
        this.solution = solution;
    }
}