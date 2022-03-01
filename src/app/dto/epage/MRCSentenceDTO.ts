import {ExercisePageDTO} from "./ExercisePageDTO";
import {AssignableDTO} from "../assignable/AssignableDTO";

export interface MRCSentenceDTO extends ExercisePageDTO {
    assignables: AssignableDTO[];
}