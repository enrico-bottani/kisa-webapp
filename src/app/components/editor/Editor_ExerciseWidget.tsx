import {useParams} from "react-router-dom";
import React, {Props, useEffect, useState} from "react";
import Exercise from "../../model/exercise/Exercise";
import ExerciseClient from "../../client/ExerciseClient";
import ExerciseMapper from "../../mapper/ExerciseMapper";
import NetState from "../../util/NetState";
import ExercisePaginationWidget from "../pagination/ExercisePaginationWidget";
import RCSentenceEditor from "../editor/RCSentenceEditor";
import {MRCSentence} from "../../model/epage/MRCSentence";
import MRCAnswerable from "../../model/assignable/MRCAnswerable";
import ExercisePage from "../../model/epage/ExercisePage";
import MRCAnswerableItem from "../../model/MRCAnswerableItem";
import EditorStep from "./utils/EditorStep";
import RCEditorPreviewWrapper from "../preview/RCEditorPreviewWrapper";

export default function Editor_ExerciseWidget(props: { editMode: boolean }) {
    let params = useParams();
    let exerciseId = Number(params.exercise);

    let [exercise, setExercise] = useState(Exercise.builder().setId(exerciseId).build());
    let [netState, setNetState] = useState(NetState.NET_STATE_LOADING);
    let [selectedIdNumber, setSelectedIdNumber] = useState(0);
    let [username, setUsername] = useState("");

    function downloadExercise() {
        ExerciseClient.getExercise(exerciseId)
            .then(exe => {
                setExercise(ExerciseMapper.map(exe, 0))
                console.log(ExerciseMapper.map(exe, 0));
                setNetState(NetState.NET_STATE_OK)
            })
            .catch(e => setNetState(NetState.NET_STATE_ERROR))
    }

    function sentenceRendering() {
        // Select the page to display
        let pageToDisplay = exercise.pages.find(p => p.id === selectedIdNumber)

        let pageJSX = <></>
        if (pageToDisplay !== undefined && props.editMode) {
            pageJSX = <RCSentenceEditor rcSentenceDTO={pageToDisplay as MRCSentence}
                                        fetchExercise={downloadExercise}/>
        } else if (pageToDisplay !== undefined) {
            pageJSX = <div className={"container"}>
                <div className='row gx-0 mb-3 pb-2 d-flex align-items-center'>
                    <div className="col">
                        <RCEditorPreviewWrapper editMode={props.editMode} rcSentenceDTO={pageToDisplay as MRCSentence}/>
                    </div>
                </div>
            </div>
        }
        return pageJSX;
    }

    useEffect(() => {
        console.log("API CALL")
        downloadExercise();
        ExerciseClient.getUsername().then((user) =>
            setUsername(user.userName))
    }, [])

    let editPreview = <></>
    if (username !== "" && !props.editMode)
        editPreview = <a href={"/edit/exercises/" + exercise.id}>[E]</a>;
    else if (username !== "" && props.editMode)
        editPreview = <a href={"/exercises/" + exercise.id}>[V]</a>;
    return (
        <div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <h2>{editPreview} {exercise.title}</h2>
                    </div>
                </div>
            </div>
            {
                // Render pages here (ex todo)
            }
            <ExercisePaginationWidget
                excercise={exercise}
                idNumber={selectedIdNumber}
                onSetPage={(page: number) => {
                    setSelectedIdNumber(page)
                }}
                createNewDraft={() => {
                    ExerciseClient.postNewEmptyExercisePage(exercise.id).then(() => downloadExercise());
                }}/>

            {
                // Render sentence
                sentenceRendering()
            }


        </div>);
}
