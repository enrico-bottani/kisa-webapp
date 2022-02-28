import {RCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCSentence} from "../model/epage/MRCSentence";
import {Assignable} from "../model/assignable/Assignable";
import AssignableMapper from "./AssignableMapper";

class RCSentenceMapper {
    static map(e: RCSentenceDTO): MRCSentence {
        return MRCSentence.builder()
            .setPosition(e.position)
            .setAssignables(e.assignables.map(assign=>{return AssignableMapper.map(assign)}))
            .setDirty(e.dirty === true)
            .setPosition(e.position)
            .build();
    }
}

export default RCSentenceMapper;