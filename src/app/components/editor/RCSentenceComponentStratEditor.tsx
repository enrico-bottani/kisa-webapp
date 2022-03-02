import {MRCSentence} from "../../model/epage/MRCSentence";
import {Assignable} from "../../model/assignable/Assignable";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import MRCAnswerable from "../../model/assignable/MRCAnswerable";
import {ChangeEvent} from "react";
import MRCAnswerableWidget from "./MRCAnswerableWidget";
import Exercise from "../../model/exercise/Exercise";

export default function RCSentenceComponentStratEditor(props: { rcSentenceDTO: MRCSentence, onSentenceAnswerableItemChange: (sentenceId:number,answerableId: number, answerItemId: number, value: string) => void }) {

    function getString(assignable: Assignable) {
        return (<div className="mb-3" key={assignable.id}>
            <label htmlFor="exampleInputEmail1" className="form-label">Text component</label>
            <input type="text" className="form-control rounded-0" id="exampleInputEmail1"
                   aria-describedby="emailHelp"/>
        </div>);
    }

    function onSentenceAnswerableItemChange(answerableId: number, answerItemId: number, value: string) {
        props.onSentenceAnswerableItemChange(props.rcSentenceDTO.id,answerableId,answerItemId,value);
    }


    let toRender = props.rcSentenceDTO.assignables.map(assignable => {
        switch (assignable.type) {
            case AssignableDTO.Type.String:
                return getString(assignable)
            case AssignableDTO.Type.RCAnswerable:
                return (
                    <div className="mb-3" key={assignable.id}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Radio choice component</label>
                        <MRCAnswerableWidget mrcAnswerable={assignable as MRCAnswerable}
                                             onSentenceAnswerableItemChange={onSentenceAnswerableItemChange}/>
                        <button>Add new choice</button>
                    </div>)
            case AssignableDTO.Type.Undefined:
                return (
                    <div className="mb-3" key={assignable.id}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Undefined</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>)
        }
    })

    return (<div>
        {toRender}
        <button>Add new component</button>
    </div>)
}