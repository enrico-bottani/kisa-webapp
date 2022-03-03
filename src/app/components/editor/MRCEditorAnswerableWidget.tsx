import MRCAnswerable from "../../model/assignable/MRCAnswerable";
import Exercise from "../../model/exercise/Exercise";
import MRCEditorAnswerableItemWidget from "./MRCEditorAnswerableItemWidget";
import MRCAnswerableItem from "../../model/MRCAnswerableItem";

/**
 * Multiple Radio Choice Answerable Widget
 * @param props
 * @constructor
 */
export default function MRCEditorAnswerableWidget(props: {
    mrcAnswerable: MRCAnswerable,fetchExercise:(mrc:MRCAnswerableItem)=>void}) {


    function onChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        let answItem = props.mrcAnswerable.answerableItems.find(answItem => answItem.id === id);
        if (answItem === undefined) return;
    }

    let mrcAnswerableElement = props.mrcAnswerable.answerableItems.map(answerableItem => {
        return (<MRCEditorAnswerableItemWidget fetchExercise={props.fetchExercise} answerableItem={answerableItem} key={answerableItem.id}/>)
    });
    return (<>{mrcAnswerableElement}</>)
}