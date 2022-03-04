import {useState} from "react";
import ExerciseClient from "../../client/ExerciseClient";
import STRConstant from "../../model/assignable/STRConstant";
import MRCAnswerableItem from "../../model/MRCAnswerableItem";

export default function Editor_STRConstantItem_Widget(props:{strConstant:STRConstant, fetchExercise:() => void}) {
    let [typing, setTyping] = useState(setTimeout(() => {
    }, 0));
    let [synced, setSynced] = useState(true);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSynced(false)
        clearTimeout(typing)
        setTyping(setTimeout(() => {
            let answItem = props.strConstant;
            answItem.string = e.target.value;
            console.log("PUT /str_constant/" + props.strConstant.id + ".json",answItem)
            ExerciseClient.putSTRConstant(answItem.id, answItem.clone())
                .then(() => {
                    setSynced(true);
                    props.fetchExercise()
                }).catch(e => console.error(e));
        }, 500));
    }

    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Text component</label>
            <input type="text" onChange={onChange} className="form-control rounded-0" id="exampleInputEmail1"
                   defaultValue={props.strConstant.string}
                   aria-describedby="emailHelp"/>
        </div>)
}