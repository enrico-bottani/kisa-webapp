import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import Exercise from "../model/exercise/Exercise";
import {ExercisePageDTO} from "../dto/epage/ExercisePageDTO";
import ExercisePage from "../model/epage/ExercisePage";
import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import {MRCSentence} from "../model/epage/MRCSentence";
import AssignableMapper from "./AssignableMapper";

export default class ExercisePageMapper {
    public static map(e: ExerciseDTO): ExercisePage[] {
        // For each todo
        let todo: ExercisePage[] = e.pages.map(td => {
            // Get the type
            if (td.type === ExercisePage.Type.RCSentenceType) {
                let mrcSDTO = td as MRCSentenceDTO;
                // Set the id, (fix api to return it in the future)
                mrcSDTO._exerciseId = e.id;
                return new MRCSentence(AssignableMapper.map(mrcSDTO),
                    mrcSDTO.id,
                    mrcSDTO.type,
                    mrcSDTO.position,
                    mrcSDTO._exerciseId, 
                    mrcSDTO.dirty == true);
            } else return new ExercisePage(td.id, td.type, td.position, e.id, td.dirty)
        });
        return todo;
    }
}
