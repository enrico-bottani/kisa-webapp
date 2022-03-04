import {AssignableDTO} from "../dto/assignable/AssignableDTO";
import {Assignable} from "../model/assignable/Assignable";
import MRCAnswerable from "../model/assignable/MRCAnswerable";
import STRConstant from "../model/assignable/STRConstant";
import MRCAnswerableItem from "../model/MRCAnswerableItem";
import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCAnswerableDTO} from "../dto/assignable/MRCAnswerableDTO";


export default class AssignableMapper {
    static map(assignable: AssignableDTO): Assignable {

            // A dipendenza del tipo dell'elemento della frase mappo in una stringa o un answerable
            // Caso answerable
            if (assignable.type == AssignableDTO.Type.RCAnswerable) {
                var assign = assignable as MRCAnswerableDTO;
                let mrcAnswerable =  new MRCAnswerable(assign.id, assign.type, assign.position);
                var ansItems = this.setAnswerableItemsWithParent(assign, mrcAnswerable);
                mrcAnswerable.setAnswerableItems(ansItems);
                return mrcAnswerable;
            }
            // caso stringa
            if (assignable.type == AssignableDTO.Type.String) {
                var assign1 = assignable as STRConstant;
                return new STRConstant(assign1.id, assign1.type, assign1.position, assign1.string);
            }
            return new Assignable(assignable.id, assignable.type, assignable.position);
    }

    private static setAnswerableItemsWithParent(assign: MRCAnswerableDTO, _parent: MRCAnswerable) {
        var ansItems = assign.answerableItems.map(answItem =>
            new MRCAnswerableItem(answItem.id, answItem.choice, answItem.solution))
        return ansItems;
    }
}
