import {Assignable} from "./assignable/Assignable";
import {MRCAnswerableDTO} from "../dto/assignable/MRCAnswerableDTO";
import MRCAnswerable from "./assignable/MRCAnswerable";

export default class MRCAnswerableItem {
    id: number; choice: string; solution: number;_parentId: number;

    constructor(id: number, choice: string, solution: number, _parentId: number) {
        this.id = id;
        this.choice = choice;
        this.solution = solution;
        this._parentId = _parentId;
    }
}