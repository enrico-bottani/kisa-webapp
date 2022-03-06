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

    function broadcastRadioChange(id:number){
        console.log("rdchange: "+id)
        setGivenAnswer(id);

    }

    let child = (props.rcAnswerableDTO.answerableItems.map((choice, i) => {
        let id = "rc_" + i;
        return (<RCButton
                    notifyChange={broadcastRadioChange}
                    givenAnswer={givenAnswer}
                    key={id}
                    gapKey={props.gapKey}
                    choice={choice}
                    editMode={props.editMode}
                />)
    }))
    return (
        <div className="col-auto d-flex">
            <div className="btn-group" role="group">
                {child}
            </div>
        </div>
    )
}

export default RCChoices;
