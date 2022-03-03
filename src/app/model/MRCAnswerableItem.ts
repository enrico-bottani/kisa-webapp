import {Assignable} from "./assignable/Assignable";
import {MRCAnswerableDTO} from "../dto/assignable/MRCAnswerableDTO";
import MRCAnswerable from "./assignable/MRCAnswerable";

export default class MRCAnswerableItem {
    id: number; choice: string; solution: number;
    _assignableId: number;
    _exercisePageId: number;
    _exerciseId:number;
    constructor(id: number, choice: string, solution: number,
                _assignableId: number, exercisePageId: number, exerciseId: number) {
        this.id = id;
        this.choice = choice;
        this.solution = solution;
        this._assignableId = _assignableId;
        this._exercisePageId = exercisePageId;
        this._exerciseId = exerciseId;
    }
    public clone():MRCAnswerableItem{
        return new MRCAnswerableItem(this.id, this.choice, this.solution,
            this._assignableId,
            this._exercisePageId,
            this._exerciseId);
    }
}