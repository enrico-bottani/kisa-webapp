import {MRCSentence} from "../../model/epage/MRCSentence";
import {Assignable} from "../../model/assignable/Assignable";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import MRCAnswerable from "../../model/assignable/MRCAnswerable";
import {ChangeEvent} from "react";
import MRCEditorAnswerableWidget from "./MRCEditorAnswerableWidget";
import Exercise from "../../model/exercise/Exercise";
import MRCAnswerableItem from "../../model/MRCAnswerableItem";
import Editor_STRConstantItem_Widget from "./Editor_STRConstantItem_Widget";
import STRConstant from "../../model/assignable/STRConstant";

export default function RCSentenceComponentStratEditor(props: {
    rcSentenceDTO: MRCSentence,
    fetchExercise:()=>void}) {

    function getString(assignable: STRConstant) {
        return (<Editor_STRConstantItem_Widget fetchExercise={props.fetchExercise} strConstant={assignable} key={assignable.id}/>);
    }


    let toRender = props.rcSentenceDTO.assignables.map(assignable => {
        switch (assignable.type) {
            case AssignableDTO.Type.String:
                return getString(assignable as STRConstant)
            case AssignableDTO.Type.RCAnswerable:
                return (
                    <div className="mb-3" key={assignable.id}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Radio choice component</label>
                        <MRCEditorAnswerableWidget fetchExercise={props.fetchExercise} mrcAnswerable={assignable as MRCAnswerable}/>
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