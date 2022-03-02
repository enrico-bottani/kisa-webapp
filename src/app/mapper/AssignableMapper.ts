import {AssignableDTO} from "../dto/assignable/AssignableDTO";
import {Assignable} from "../model/assignable/Assignable";
import MRCAnswerable from "../model/assignable/MRCAnswerable";
import STRConstant from "../model/assignable/STRConstant";
import MRCAnswerableItem from "../model/MRCAnswerableItem";


export default class AssignableMapper {
    static map(assignable: AssignableDTO): Assignable {
        // A dipendenza del tipo dell'elemento della frase mappo in una stringa o un answerable
        // Caso answerable
        if (assignable.type == AssignableDTO.Type.RCAnswerable) {
            var assign = assignable as MRCAnswerable;
            var ansItems = assign.answerableItems.map(answItem =>
                new MRCAnswerableItem(answItem.id, answItem.choice, answItem.solution, assign))
            return new MRCAnswerable(assign.id, assign.type, assign.position, ansItems);
        }
        // caso stringa
        if (assignable.type == AssignableDTO.Type.String) {
            var assign1 = assignable as STRConstant;
            return new STRConstant(assign1.id, assign1.type, assign1.position, assign1.string);
        }

        return new Assignable(assignable.id, assignable.type, assignable.position);
    }
}
