import {AssignableDTO} from "./AssignableDTO";
import MRCAnswerableItemDTO from "../item/MRCAnswerableItemDTO";

export interface MRCAnswerableDTO extends AssignableDTO {
    answerableItems: MRCAnswerableItemDTO[]
}