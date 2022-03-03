import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import {Assignable} from "./Assignable";
import {MRCAnswerableDTO} from "../../dto/assignable/MRCAnswerableDTO";
import MRCAnswerableItem from "../MRCAnswerableItem";
import {MRCSentence} from "../epage/MRCSentence";

export default class MRCAnswerable extends Assignable implements MRCAnswerableDTO {
    answerableItems: MRCAnswerableItem[] = [];

    constructor(id: number, type: string, position: number) {
        super(id, type, position);
    }

    setAnswerableItems(answItems: MRCAnswerableItem[]): MRCAnswerable {
        this.answerableItems = answItems;
        return this;
    }

}