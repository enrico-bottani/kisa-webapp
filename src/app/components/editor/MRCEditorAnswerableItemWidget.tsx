import MRCAnswerableItem from "../../model/MRCAnswerableItem";
import {isBoolean} from "util";
import {useState} from "react";
import ExerciseClient from "../../client/ExerciseClient";

export default function MRCEditorAnswerableItemWidget(props: { answerableItem: MRCAnswerableItem }) {
    let [typing, setTyping] = useState(setTimeout(() => {
    }, 0));
    let [synced, setSynced] = useState(true);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSynced(false)
        clearTimeout(typing)
        setTyping(setTimeout(() => {
            console.log("change: " + e.target.value);
            console.log("PUT /answerable_item/" + props.answerableItem.id + ".json")
            let answItem = props.answerableItem.clone();
            answItem.choice = e.target.value;
            ExerciseClient.putAnswerableItem(props.answerableItem.id,answItem)
                .then(()=>{setSynced(true)}).catch(e=>console.error(e));
        }, 1000));
    }


    let cloudImg = synced ? <i className="bi bi-cloud-check"/> : <i className="bi bi-arrow-repeat"/>;

    return (
        <div>
            <div className="input-group rounded-0 mb-1" key={props.answerableItem.id}>
                {/* Radio button */}
                <div className="input-group-text rounded-0">
                    <input className="form-check-input mt-0" type="radio" name="radio-x"
                           aria-label="Radio button for following text input"/>
                </div>
                {/* Text field */}
                <input type="text" defaultValue={props.answerableItem.choice}
                       onChange={e => onChange(e)}
                       className="form-control rounded-0"
                       aria-label="Text input with radio button"/>
                {/* Upload button */}
                <button type="button" className="btn btn-outline-secondary rounded-0">
                    {cloudImg}
                </button>
                {/* Delete field */}
                <button type="button" className="btn btn-outline-danger rounded-0"><i className="bi bi-trash3"/>
                </button>
            </div>
        </div>);
}