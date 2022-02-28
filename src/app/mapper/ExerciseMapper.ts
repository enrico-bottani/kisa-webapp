import Exercise from "../model/exercise/Exercise";
import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import ExercisePageMapper from "./ExercisePageMapper";

class ExerciseMapper {
    static map(e: ExerciseDTO, selected: number): Exercise {

        return Exercise.builder().setId(e.id).setTodo(ExercisePageMapper.map(e.pages)).setSelected(selected).setTitle(e.title).build();
    }
}

export default ExerciseMapper;