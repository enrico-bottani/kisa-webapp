import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCSentence} from "../model/epage/MRCSentence";
import {Assignable} from "../model/assignable/Assignable";
import AssignableMapper from "./AssignableMapper";

class RCSentenceMapper {
    static map(e: MRCSentenceDTO): MRCSentence {
        if (e == undefined) return MRCSentence.builder().build();
        let mrcSentence =  MRCSentence.builder()
            .setId(e.id)
            .setPosition(e.position)
            .setAssignables(AssignableMapper.map(e))
            .setDirty(e.dirty === true)
            .setParentId(e.parentId)
            .build();
        return mrcSentence;
    }
}

export default RCSentenceMapper;