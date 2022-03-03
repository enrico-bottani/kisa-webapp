import {Assignable} from "./Assignable";
import {MRCAnswerableDTO} from "../../dto/assignable/MRCAnswerableDTO";
import {STRConstantDTO} from "../../dto/assignable/STRConstantDTO";

export default class STRConstant extends Assignable implements STRConstantDTO {
    string: string;

    constructor(id: number, type: string, position: number, value: string, _sentenceId: number, _exerciseId: number) {
        super(id, type, position, _sentenceId, _exerciseId);
        this.string = value;
    }
}