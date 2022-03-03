import Exercise from "../model/exercise/Exercise";
import {ExerciseDTO} from "../dto/exercise/ExerciseDTO";
import ExercisePageMapper from "./ExercisePageMapper";
import ExercisePage from "../model/epage/ExercisePage";

class ExerciseMapper {
    static map(e: ExerciseDTO, selected: number): Exercise {
        let exercise = Exercise.builder().setId(e.id)
            .setSelected(selected).setTitle(e.title).build();
        var exercisePages: ExercisePage[] = e.pages.map(pageDTO => {
                let page =  ExercisePageMapper.map(pageDTO);
                page.setExercise(exercise);
                return page;
            }
        );
        exercise.setPages(exercisePages);
        return exercise;
    }
}

export default ExerciseMapper;