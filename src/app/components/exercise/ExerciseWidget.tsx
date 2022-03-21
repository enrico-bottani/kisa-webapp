import {useParams} from "react-router-dom";
import React, {Props, useEffect, useState} from "react";
import Exercise from "../../model/exercise/Exercise";
import ExerciseClient from "../../client/ExerciseClient";
import ExerciseMapper from "../../mapper/ExerciseMapper";
import NetState from "../../util/NetState";
import ExercisePaginationWidget from "../pagination/ExercisePaginationWidget";
import RCSentenceEditor from "../editor/RCSentenceEditor";
import {MRCSentence} from "../../model/epage/MRCSentence";
import RCPreviewWrapper from "../preview/RCPreviewWrapper";
import ExercisePageContentWidget from "./page/ExercisePageContentWidget";

export default function ExerciseWidget(props: { editMode: boolean }) {
    let params = useParams();
    let exerciseId = Number(params.exercise);

    let [exercise, setExercise] = useState(Exercise.builder().setId(exerciseId).build());
    let [netState, setNetState] = useState(NetState.NET_STATE_LOADING);
    let [selectedIdNumber, setSelectedIdNumber] = useState(0);
    let [username, setUsername] = useState("");

    /**
     * Funzione chiamata quando l'esercizio è stato modificato altrove e bisogna aggiorarlo.
     */
    function updateExercise() {
        ExerciseClient.getExercise(exerciseId)
            .then(exe => {
                setExercise(ExerciseMapper.map(exe, 0))
                console.log(ExerciseMapper.map(exe, 0));
                setNetState(NetState.NET_STATE_OK)
            })
            .catch(e => setNetState(NetState.NET_STATE_ERROR))
    }

    useEffect(() => {
        console.log("API CALL")
        updateExercise();
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
            <div className={"container mt-4"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <h2>{editPreview} {exercise.title}</h2>
                    </div>
                </div>
            </div>
            <ExercisePaginationWidget excercise={exercise} idNumber={selectedIdNumber}
                                      onSetPage={(page: number) => {
                                          setSelectedIdNumber(page)
                                      }}
                                      editMode={props.editMode}
                                      createNewDraft={() => {
                                          ExerciseClient.postNewEmptyExercisePage(exercise.id).then(() => updateExercise());
                                      }}/>

            <ExercisePageContentWidget exercise={exercise} selectedPageID={selectedIdNumber} editMode={props.editMode}
                                       updateExercise={updateExercise}/>
        </div>);
}
