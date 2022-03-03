import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import {Assignable} from "./Assignable";
import {MRCAnswerableDTO} from "../../dto/assignable/MRCAnswerableDTO";
import MRCAnswerableItem from "../MRCAnswerableItem";

export default class MRCAnswerable extends Assignable implements MRCAnswerableDTO {
    answerableItems: MRCAnswerableItem[];

    constructor(id: number, type: string, position: number, answerableItems: MRCAnswerableItem[], _sentenceId: number, _exerciseId: number) {
        super(id, type, position, _sentenceId, _exerciseId);
        this.answerableItems = answerableItems;
    }
}