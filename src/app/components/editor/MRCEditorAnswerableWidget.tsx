import MRCAnswerable from "../../model/assignable/MRCAnswerable";
import MRCAnswerableItem from "../../model/MRCAnswerableItem";
import Editor_MRCAnswerableItem_Widget from "./Editor_MRCAnswerableItem_Widget";

/**
 * Multiple Radio Choice Answerable Widget
 * @param props
 * @constructor
 */
export default function MRCEditorAnswerableWidget(props: {
    mrcAnswerable: MRCAnswerable,
    fetchExercise: () => void,
}) {


    function onChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        let answItem = props.mrcAnswerable.answerableItems.find(answItem => answItem.id === id);
        if (answItem === undefined) return;
    }

    let mrcAnswerableElement = props.mrcAnswerable.answerableItems.map(answerableItem => {
        return (<Editor_MRCAnswerableItem_Widget fetchExercise={props.fetchExercise} answerableItem={answerableItem}
                                                 key={answerableItem.id}/>)
    });
    return (<>{mrcAnswerableElement}</>)
}