import RCSentenceEditor from "../../editor/RCSentenceEditor";
import {MRCSentence} from "../../../model/epage/MRCSentence";
import RCPreviewWrapper from "../../preview/RCPreviewWrapper";
import React from "react";
import Exercise from "../../../model/exercise/Exercise";
import {ExerciseDTO} from "../../../dto/exercise/ExerciseDTO";

interface Props{
    exercise:ExerciseDTO;
    selectedPageID:number;
    editMode:boolean;
    updateExercise: () => void;
}

export default function ExercisePageContentWidget(props:Props){
    let pageToDisplay = props.exercise.pages.find(p => p.id === props.selectedPageID)
    if (pageToDisplay == undefined) return <></>;
    if (props.editMode)
        return (<RCSentenceEditor rcSentenceDTO={pageToDisplay as MRCSentence}
                                  fetchExercise={props.updateExercise}/>);
    return (<div className={"container"}>
        <div className='row gx-0 mb-3 pb-2 d-flex align-items-center'>
            <div className="col">
                <RCPreviewWrapper editMode={props.editMode} rcSentenceDTO={pageToDisplay as MRCSentence}/>
            </div>
        </div>
    </div>);
}
