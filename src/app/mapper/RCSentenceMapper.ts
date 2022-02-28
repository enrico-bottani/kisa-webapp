import {RCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCSentence} from "../model/epage/MRCSentence";

class RCSentenceMapper {
    static map(e: RCSentenceDTO): MRCSentence {
        return MRCSentence.builder()
            .setPosition(e.position)
            .setAssignables(e.assignables)
            .setDirty(e.dirty === true)
            .setPosition(e.position)
            .build();
    }
}

export default RCSentenceMapper;