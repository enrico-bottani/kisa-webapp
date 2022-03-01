
import TodoPage from './number/TodoPage'
import TodoPageGenericButton from './number/TodoPageGenericButton';
import {ExerciseDTO} from "../../dto/exercise/ExerciseDTO";
import ExercisePage from "../../model/epage/ExercisePage";
import Exercise from "../../model/exercise/Exercise";
interface Props {
  excercise: Exercise;
  excerciseNumber: number;
  onSetExercise: any;
  createNewDraft(type: ExercisePage.Type.RCSentenceType): any
}

function TodosPagination(props: Props) {
  var listItems = props.excercise.pages.map((sentence, i) => {
    return (<TodoPage
      key={"todo-page-" + i}
      representingTodoNumber={sentence.position}
      currentTodoNumber={props.excerciseNumber}
      errorsNumber={-1}
      onSetSelected={props.onSetExercise}></TodoPage>)
  });
  listItems.push(<TodoPageGenericButton<ExercisePage.Type>
    key={"todo-page--1"}
    onClick={props.createNewDraft}
    label={'+'} btnClass={''}
    param={ExercisePage.Type.RCSentenceType} sign={undefined} id={''}></TodoPageGenericButton>)

  return (<>{listItems}</>)
}
export default TodosPagination;
