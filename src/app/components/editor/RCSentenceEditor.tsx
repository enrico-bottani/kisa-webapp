import styles from './RCSentenceEditor.module.css'
import {MRCSentence} from "../../model/epage/MRCSentence";
import {MRCSentenceDTO} from "../../dto/epage/MRCSentenceDTO";
import EditorStep from "./utils/EditorStep";
import RCEditorPreviewWrapper from "../preview/RCEditorPreviewWrapper";
import {stringify} from "querystring";
import RCSentenceComponentStratEditor from "./RCSentenceComponentStratEditor";

interface Props {
    stageRCSentenceEdits: (sentenceId: number, rcSentenceDTO: MRCSentenceDTO) => void;
    rcSentenceDTO: MRCSentence;
}



function RCSentenceEditor(props: Props) {
    let marginTop = 2;


    return (
        <div className={"container"}>
            <div className={styles.EditorFrame}>
                <div className="container px-0">
                    <div className='row gx-0 border-bottom border-2 mb-3 pb-2 d-flex align-items-center'>
                        <div className="col-auto">
                            <button disabled={!(props.rcSentenceDTO.dirty === true)}
                                    className={"btn btn-success rounded-0 " + styles.EditorSubStepNumber}>
                                <i className="bi bi-save"/>
                                <span className='ms-2'>Save</span>
                            </button>
                        </div>
                        <div className="col ms-3"><h2 className='mb-0'>Radio Choice Editor</h2></div>
                        <div className="col-auto">
                            <div className="btn btn-outline-secondary rounded-0 border-0">
                                <i className="bi bi-three-dots"/></div>
                        </div>
                    </div>
                    <div className='row gx-0 border-bottom border-2 mb-3 pb-2 d-flex align-items-center'>
                        <div className="col">
                            <EditorStep number={0} title="Preview:"
                                        paddingTop={marginTop} paddingBottom={marginTop} positionSticky={true}>
                                <RCEditorPreviewWrapper rcSentenceDTO={props.rcSentenceDTO}/>
                            </EditorStep>
                        </div>
                    </div>
                </div>
                {
                    <EditorStep number={1} title="Write the body:" paddingTop={marginTop} paddingBottom={marginTop}>
                        <RCSentenceComponentStratEditor rcSentenceDTO={props.rcSentenceDTO}/>
                    </EditorStep>
                }
            </div>
        </div>)
}

export default RCSentenceEditor;