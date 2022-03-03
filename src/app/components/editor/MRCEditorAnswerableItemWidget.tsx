import MRCAnswerableItem from "../../model/MRCAnswerableItem";

export default function MRCEditorAnswerableItemWidget(props: { answerableItem: MRCAnswerableItem }) {
    function onChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        console.log("change: "+e.target.value);
        console.log(props.answerableItem);
    }

    return (<div className="input-group rounded-0 mb-1" key={props.answerableItem.id}>
        <div className="input-group-text rounded-0">
            <input className="form-check-input mt-0" type="radio" name="radio-x"
                   aria-label="Radio button for following text input"/>
        </div>
        <input type="text" defaultValue={props.answerableItem.choice}
               onChange={e => onChange(e, props.answerableItem.id)}
               className="form-control rounded-0"
               aria-label="Text input with radio button"/>
    </div>);
}