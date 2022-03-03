import {AssignableDTO} from "../dto/assignable/AssignableDTO";
import {Assignable} from "../model/assignable/Assignable";
import MRCAnswerable from "../model/assignable/MRCAnswerable";
import STRConstant from "../model/assignable/STRConstant";
import MRCAnswerableItem from "../model/MRCAnswerableItem";
import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";


export default class AssignableMapper {
    static map(sentenceDTO: MRCSentenceDTO): Assignable[] {
       return sentenceDTO.assignables.map((e) =>{
        // A dipendenza del tipo dell'elemento della frase mappo in una stringa o un answerable
        // Caso answerable
        if (e.type == AssignableDTO.Type.RCAnswerable) {
            var assign = e as MRCAnswerable;
            var ansItems = assign.answerableItems.map(answItem =>
                new MRCAnswerableItem(answItem.id, answItem.choice, answItem.solution, assign.id))
            return new MRCAnswerable(assign.id, assign.type, assign.position, ansItems, sentenceDTO.id,sentenceDTO._exerciseId);
        }
        // caso stringa
        if (e.type == AssignableDTO.Type.String) {
            var assign1 = e as STRConstant;
            return new STRConstant(assign1.id, assign1.type, assign1.position, assign1.string, sentenceDTO.id,sentenceDTO._exerciseId);
        }
        return new Assignable(e.id, e.type, e.position, sentenceDTO.id,sentenceDTO._exerciseId);
        })
    }
}
