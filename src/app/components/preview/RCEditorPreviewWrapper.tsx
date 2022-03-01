import {AssignableDTO} from "../../dto/assignable/AssignableDTO";
import {MRCSentenceDTO} from "../../dto/epage/MRCSentenceDTO";
import {STRConstantDTO} from "../../dto/assignable/STRConstantDTO";
import {MRCAnswerableDTO} from "../../dto/assignable/MRCAnswerableDTO";
import RCChoices from "./assignables/RCOptions/RCChoices";
import StringElement from "./assignables/StringElement/StringElement";

interface Props {
    rcSentenceDTO: MRCSentenceDTO;
}

function RCEditorPreviewWrapper(props: Props) {
    var singleChoiceSentence = props.rcSentenceDTO;
    let gapKeyCounter = 0;
    let children = singleChoiceSentence.assignables.map((a, id) => {
        switch (a.type) {
            case AssignableDTO.Type.String:
                return (
                    <StringElement
                        key={id}
                        stringConstant={(a as STRConstantDTO)}
                        editMode={1}/>
                );
            case AssignableDTO.Type.RCAnswerable:
                gapKeyCounter++
                return (
                    <RCChoices
                        key={id}
                        gapKey={gapKeyCounter - 1}
                        rcAnswerableDTO={(a as MRCAnswerableDTO)}
                        editMode={1}/>
                );
            default:
                return <></>
        }
    })

    return (
        <div className="container ps-0">
            <div className="row gx-3">
                {children}
            </div>
        </div>
    )
}

export default RCEditorPreviewWrapper;