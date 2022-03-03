import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import Exercise from "../model/exercise/Exercise";
import {ExercisePageDTO} from "../dto/epage/ExercisePageDTO";
import ExercisePage from "../model/epage/ExercisePage";
import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCSentence} from "../model/epage/MRCSentence";
import AssignableMapper from "./AssignableMapper";

export default class ExercisePageMapper {
    public static map(exercisePageDTO: ExercisePageDTO): ExercisePage {
        // Get the type
        if (exercisePageDTO.type === ExercisePage.Type.RCSentenceType) {
            let mrcSentenceDTO = exercisePageDTO as MRCSentenceDTO;

            let mrcSentence = new MRCSentence(
                mrcSentenceDTO.id,
                mrcSentenceDTO.type,
                mrcSentenceDTO.position,
                mrcSentenceDTO.dirty == true);

            let assignableList = mrcSentenceDTO.assignables.map(mrcSentenceDTO => {
                let assignable = AssignableMapper.map(mrcSentenceDTO)
                assignable.setParentSentence(mrcSentence);
                return assignable;
            });

            mrcSentence.setAssignables(assignableList);


            return mrcSentence;
        } else return new ExercisePage(exercisePageDTO.id, exercisePageDTO.type, exercisePageDTO.position, exercisePageDTO.dirty)
    }
}
