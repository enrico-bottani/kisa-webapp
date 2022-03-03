import {AssignableDTO} from "../dto/assignable/AssignableDTO";
import {Assignable} from "../model/assignable/Assignable";
import MRCAnswerable from "../model/assignable/MRCAnswerable";
import STRConstant from "../model/assignable/STRConstant";
import MRCAnswerableItem from "../model/MRCAnswerableItem";
import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCAnswerableDTO} from "../dto/assignable/MRCAnswerableDTO";


export default class AssignableMapper {
    static map(sentenceDTO: MRCSentenceDTO): Assignable[] {
        return sentenceDTO.assignables.map((e) => {
            // A dipendenza del tipo dell'elemento della frase mappo in una stringa o un answerable
            // Caso answerable
            if (e.type == AssignableDTO.Type.RCAnswerable) {
                var assign = e as MRCAnswerableDTO;
                let mrcAnswerable =  new MRCAnswerable(assign.id, assign.type, assign.position);
                var ansItems = assign.answerableItems.map(answItem =>
                    new MRCAnswerableItem(answItem.id, answItem.choice, answItem.solution).setParent(mrcAnswerable))
                mrcAnswerable.setAnswerableItems(ansItems);
                return mrcAnswerable;
            }
            // caso stringa
            if (e.type == AssignableDTO.Type.String) {
                var assign1 = e as STRConstant;
                return new STRConstant(assign1.id, assign1.type, assign1.position, assign1.string);
            }
            return new Assignable(e.id, e.type, e.position);
        })
    }
}
