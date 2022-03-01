import {MRCSentence} from "../../model/epage/MRCSentence";
import {Assignable} from "../../model/assignable/Assignable";
import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import MRCAnswerable from "../../model/assignable/MRCAnswerable";

export default function RCSentenceComponentStratEditor(props: { rcSentenceDTO: MRCSentence }) {

    function getString(assignable: Assignable) {
        return (<div className="mb-3" key={assignable.id}>
            <label htmlFor="exampleInputEmail1" className="form-label">Text component</label>
            <input type="text" className="form-control rounded-0" id="exampleInputEmail1"
                   aria-describedby="emailHelp"/>
        </div>);
    }

    function getRadios(mrcAnswerable: MRCAnswerable) {
        return mrcAnswerable.answerableItems.map(answerableItem => {
            return (<div className="input-group rounded-0 mb-1" key={answerableItem.id}>
                <div className="input-group-text rounded-0">
                    <input className="form-check-input mt-0" type="radio" name="radio-x"
                           aria-label="Radio button for following text input"/>
                </div>
                <input type="text" defaultValue={answerableItem.choice} className="form-control rounded-0"
                       aria-label="Text input with radio button"/>
            </div>)
        });
    }

    let toRender = props.rcSentenceDTO.assignables.map(assignable => {
        switch (assignable.type) {
            case AssignableDTO.Type.String:
                return getString(assignable)
            case AssignableDTO.Type.RCAnswerable:
                return (
                    <div className="mb-3" key={assignable.id}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Radio choice component</label>
                        {getRadios(assignable as MRCAnswerable)}
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