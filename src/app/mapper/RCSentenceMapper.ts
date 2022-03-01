import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCSentence} from "../model/epage/MRCSentence";
import {Assignable} from "../model/assignable/Assignable";
import AssignableMapper from "./AssignableMapper";

class RCSentenceMapper {
    static map(e: MRCSentenceDTO): MRCSentence {
        if (e == undefined) return MRCSentence.builder().build();
        return MRCSentence.builder()
            .setId(e.id)
            .setPosition(e.position)
            .setAssignables(e.assignables.map(assign => {
                return AssignableMapper.map(assign)
            }))
            .setDirty(e.dirty === true)
            .setPosition(e.position)
            .build();
    }
}

export default RCSentenceMapper;