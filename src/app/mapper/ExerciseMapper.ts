import Exercise from "../model/exercise/Exercise";
import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import ExercisePageMapper from "./ExercisePageMapper";

class ExerciseMapper {
    static map(e: ExerciseDTO, selected: number): Exercise {
        let exercise = Exercise.builder().setId(e.id).setTodo(ExercisePageMapper.map(e)).setSelected(selected).setTitle(e.title).build();
        return exercise;
    }
}

export default ExerciseMapper;