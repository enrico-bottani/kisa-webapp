import {useState} from "react";
import RCButton from "./rc_option_button/RCButton";
import {MRCAnswerableDTO} from "../../../../dto/assignable/MRCAnswerableDTO";
import MRCAnswerable from "../../../../model/assignable/MRCAnswerable";

interface Props {
    rcAnswerableDTO: MRCAnswerable;
    editMode: number;
    gapKey: number;
}

function RCChoices(props: Props) {
    let [givenAnswer, setGivenAnswer] = useState(-1)


    let child = (props.rcAnswerableDTO.answerableItems.map((choice, i) => {
        let id = "rc_" + i;
        return (
            <div key={id} className="col-auto">
                <RCButton
                    answerI={i}
                    gapKey={props.gapKey}
                    choice={choice.choice}
                    editMode={1}
                />
            </div>)
    }))
    return (
        <div className="col-auto d-flex">
            <div className="container p-0">
                <div className="row gx-1">
                    {child}
                </div>
            </div>

        </div>
    )
}

export default RCChoices;