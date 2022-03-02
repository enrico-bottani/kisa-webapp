import MRCAnswerable from "../../model/assignable/MRCAnswerable";
import Exercise from "../../model/exercise/Exercise";

/**
 * Multiple Radio Choice Answerable Widget
 * @param props
 * @constructor
 */
export default function MRCAnswerableWidget(props: {
    mrcAnswerable: MRCAnswerable,
    onSentenceAnswerableItemChange: (answerableId: number, answerItemId: number, value: string) => void
}) {


    function onChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        let answItem = props.mrcAnswerable.answerableItems.find(answItem => answItem.id === id);
        if (answItem === undefined) return;
        props.onSentenceAnswerableItemChange(props.mrcAnswerable.id, answItem.id, e.target.value)
    }

    let mrcAnswerableElement = props.mrcAnswerable.answerableItems.map(answerableItem => {
        return (<div className="input-group rounded-0 mb-1" key={answerableItem.id}>
            <div className="input-group-text rounded-0">
                <input className="form-check-input mt-0" type="radio" name="radio-x"
                       aria-label="Radio button for following text input"/>
            </div>
            <input type="text" defaultValue={answerableItem.choice} onChange={e => onChange(e, answerableItem.id)}
                   className="form-control rounded-0"
                   aria-label="Text input with radio button"/>
        </div>)
    });
    return (<>{mrcAnswerableElement}</>)
}