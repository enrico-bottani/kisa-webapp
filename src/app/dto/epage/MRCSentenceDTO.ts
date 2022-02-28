import {ExercisePageDTO} from "./ExercisePageDTO";
import {AssignableDTO} from "../assignable/AssignableDTO";

export interface RCSentenceDTO extends ExercisePageDTO {
    assignables: AssignableDTO[];
}