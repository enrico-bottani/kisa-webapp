import TodoPage from './number/TodoPage'
import TodoPageGenericButton from './number/TodoPageGenericButton';
import {ExerciseDTO} from "../../dto/exercise/ExerciseDTO";
import ExercisePage from "../../model/epage/ExercisePage";
import Exercise from "../../model/exercise/Exercise";

interface Props {
    excercise: Exercise;
    pageNumber: number;
    onSetPage: any;

    createNewDraft(type: ExercisePage.Type.RCSentenceType): any
}

function ExercisePaginationWidget(props: Props) {
    var listItems = props.excercise.pages.map((sentence, i) => {
        return (<TodoPage
            key={"todo-page-" + i}
            representingTodoNumber={sentence.position}
            currentTodoNumber={props.pageNumber}
            errorsNumber={-1}
            onSetSelected={props.onSetPage}/>)
    });
    listItems.push(<TodoPageGenericButton<ExercisePage.Type>
        key={"todo-page--1"}
        onClick={props.createNewDraft}
        label={'+'} btnClass={''}
        param={ExercisePage.Type.RCSentenceType} sign={undefined} id={''}/>)

    return (<div className="container">
        <div>
            <div className={"row mb-3 gx-1 align-baseline"}>{listItems}</div>
        </div>
    </div>)
}

export default ExercisePaginationWidget;
