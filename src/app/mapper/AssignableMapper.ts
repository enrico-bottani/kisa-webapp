import {AssignableDTO} from "../dto/assignable/AssignableDTO";
import {Assignable} from "../model/assignable/Assignable";
import MRCAnswerable from "../model/assignable/MRCAnswerable";


export default class AssignableMapper {
    static map(assignable: AssignableDTO): Assignable {
        console.log(assignable.type)
        if (assignable.type == AssignableDTO.Type.RCAnswerable) {
            var assign = assignable as MRCAnswerable;
            return new MRCAnswerable(assign.id, assign.type, assign.position, assign.answerableItems);
        }
        return new Assignable(assignable.id, assignable.type, assignable.position);
    }
}
