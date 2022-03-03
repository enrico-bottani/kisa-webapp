import {Assignable} from "./Assignable";
import {MRCAnswerableDTO} from "../../dto/assignable/MRCAnswerableDTO";
import {STRConstantDTO} from "../../dto/assignable/STRConstantDTO";

export default class STRConstant extends Assignable implements STRConstantDTO {
    string: string;

    constructor(id: number, type: string, position: number, value: string) {
        super(id, type, position);
        this.string = value;
    }
}