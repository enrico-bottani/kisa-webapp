import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCSentence} from "../model/epage/MRCSentence";
import {Assignable} from "../model/assignable/Assignable";
import AssignableMapper from "./AssignableMapper";

class MRCSentenceMapper {
    static map(mrcSentenceDTO: MRCSentenceDTO): MRCSentence {
        if (mrcSentenceDTO == undefined) return MRCSentence.EMPTY();
            let mrcSentence = new MRCSentence(AssignableMapper.map(mrcSentenceDTO),mrcSentenceDTO.id,mrcSentenceDTO.type,mrcSentenceDTO.position,mrcSentenceDTO.parentId,mrcSentenceDTO.dirty==true);
        return mrcSentence;
    }
}

export default MRCSentenceMapper;