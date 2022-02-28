import {ExercisePageDTO} from "../epage/ExercisePageDTO";


export interface ExerciseDTO {
    id: number;
    title: string;
    pages: ExercisePageDTO[];
}