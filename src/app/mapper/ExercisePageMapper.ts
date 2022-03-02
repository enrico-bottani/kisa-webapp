import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import Exercise from "../model/exercise/Exercise";
import {ExercisePageDTO} from "../dto/epage/ExercisePageDTO";
import ExercisePage from "../model/epage/ExercisePage";
import {MRCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import RCSentenceMapper from "./RCSentenceMapper";

export default class ExercisePageMapper {
    public static map(e: ExerciseDTO): ExercisePage[] {
        // For each todo
        let todo: ExercisePage[] = e.pages.map(td => {
            // Get the type
            if (td.type === ExercisePage.Type.RCSentenceType) {
                let rcSentence = td as MRCSentenceDTO;
                // Set the id, (fix api to return it in the future)
                rcSentence.parentId = e.id;
                return RCSentenceMapper.map(rcSentence);
            } else return new ExercisePage(td.id, td.type, td.position, e.id, td.dirty)
        });
        return todo;
    }
}
