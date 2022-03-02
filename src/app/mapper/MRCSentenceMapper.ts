import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCSentence} from "../model/epage/MRCSentence";
import {Assignable} from "../model/assignable/Assignable";
import AssignableMapper from "./AssignableMapper";

class MRCSentenceMapper {
    static map(e: MRCSentenceDTO): MRCSentence {
        if (e == undefined) return MRCSentence.EMPTY();
            let mrcSentence = new MRCSentence(AssignableMapper.map(e),e.id,e.type,e.position,e.parentId,e.dirty==true);
        return mrcSentence;
    }
}

export default MRCSentenceMapper;