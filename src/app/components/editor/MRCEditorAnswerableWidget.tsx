import MRCAnswerable from "../../model/assignable/MRCAnswerable";
import Exercise from "../../model/exercise/Exercise";
import MRCEditorAnswerableItemWidget from "./MRCEditorAnswerableItemWidget";

/**
 * Multiple Radio Choice Answerable Widget
 * @param props
 * @constructor
 */
export default function MRCEditorAnswerableWidget(props: {
    mrcAnswerable: MRCAnswerable,
    onSentenceAnswerableItemChange: (answerableId: number, answerItemId: number, value: string) => void
}) {


    function onChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        let answItem = props.mrcAnswerable.answerableItems.find(answItem => answItem.id === id);
        if (answItem === undefined) return;
        props.onSentenceAnswerableItemChange(props.mrcAnswerable.id, answItem.id, e.target.value)
    }

    let mrcAnswerableElement = props.mrcAnswerable.answerableItems.map(answerableItem => {
        return (<MRCEditorAnswerableItemWidget answerableItem={answerableItem}/>)
    });
    return (<>{mrcAnswerableElement}</>)
}