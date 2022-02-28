import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import Exercise from "../model/exercise/Exercise";
import {ExercisePageDTO} from "../dto/epage/ExercisePageDTO";
import ExercisePage from "../model/epage/ExercisePage";
import {RCSentenceDTO} from "../dto/epage/MRCSentenceDTO";
import RCSentenceMapper from "./RCSentenceMapper";

export default class ExercisePageMapper {
    public static map(e: ExercisePageDTO[]): ExercisePage[] {
        // For each todo
        let todo:ExercisePage[] = e.map(td => {
            // Get the type
            if (td.type === ExercisePage.Type.RCSentenceType) {
                let rcSentence = td as RCSentenceDTO;
                return RCSentenceMapper.map(rcSentence);
            }
            else return new ExercisePage(td.position, td.type, td.dirty)
        });
        return todo;
    }
}
