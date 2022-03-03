import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import Exercise from "../model/exercise/Exercise";
import {ExercisePageDTO} from "../dto/epage/ExercisePageDTO";
import ExercisePage from "../model/epage/ExercisePage";
import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCSentence} from "../model/epage/MRCSentence";
import AssignableMapper from "./AssignableMapper";

export default class ExercisePageMapper {
    public static map(exerciseDTO: ExerciseDTO): ExercisePage[] {
        // For each todo
        let todo: ExercisePage[] = exerciseDTO.pages.map(exercisePageDTO => {
            // Get the type
            if (exercisePageDTO.type === ExercisePage.Type.RCSentenceType) {
                let mrcSentenceDTO = exercisePageDTO as MRCSentenceDTO;
                let assignableList = mrcSentenceDTO.assignables.map(mrcSentenceDTO => AssignableMapper.map(mrcSentenceDTO));

                let mrcSentence = new MRCSentence(assignableList,
                    mrcSentenceDTO.id,
                    mrcSentenceDTO.type,
                    mrcSentenceDTO.position,
                    mrcSentenceDTO._exerciseId,
                    mrcSentenceDTO.dirty == true);
                return mrcSentence;
            } else return new ExercisePage(exercisePageDTO.id, exercisePageDTO.type, exercisePageDTO.position, exerciseDTO.id, exercisePageDTO.dirty)
        });
        return todo;
    }
}
