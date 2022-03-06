import styles from './RCSentenceEditor.module.css'
import {MRCSentence} from "../../model/epage/MRCSentence";
import {MRCSentenceDTO} from "../../dto/epage/MRCSentenceDTO";
import EditorStep from "./utils/EditorStep";
import RCEditorPreviewWrapper from "../preview/RCEditorPreviewWrapper";
import {stringify} from "querystring";
import RCSentenceComponentStratEditor from "./RCSentenceComponentStratEditor";
import MRCAnswerable from "../../model/assignable/MRCAnswerable";
import Exercise from "../../model/exercise/Exercise";
import MRCAnswerableItem from "../../model/MRCAnswerableItem";

interface Props {
    rcSentenceDTO: MRCSentence;
    fetchExercise: () => void;
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
                                    className={"btn btn-secondary rounded-0 " + styles.EditorSubStepNumber}>
                                <i className="bi bi-ui-radios"/>
                            </button>
                        </div>
                        <div className="col ms-3"><h2 className='mb-0'>Radio Choice Editor</h2></div>
                        <div className="col-auto">
                            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                <button className="btn btn-outline-secondary rounded-0 border-0" data-bs-toggle="dropdown">

                                </button>
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-outline-secondary rounded-0 border-0 "
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-three-dots"/>
                                    </button>
                                    <ul className="dropdown-menu rounded-0 border-2" aria-labelledby="btnGroupDrop1">
                                        <li><a className="dropdown-item" href="#">Delete sentence</a></li>
                                    </ul>
                                </div>
                            </div>
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
                    <EditorStep number={1} title="Write the body:" paddingTop={marginTop}
                                paddingBottom={marginTop}>
                        <RCSentenceComponentStratEditor rcSentenceDTO={props.rcSentenceDTO}
                                                        fetchExercise={props.fetchExercise}/>
                    </EditorStep>
                }
            </div>
        </div>)
}

export default RCSentenceEditor;
