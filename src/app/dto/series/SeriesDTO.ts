import {ExerciseDTO} from "../exercise/ExerciseDTO";
import {UserDTO} from "../auth/UserDTO";

export interface SeriesDTO {
    id: number;
    title: string;
    exercises:ExerciseDTO[];
    user:UserDTO;
}
