import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Exercise from "../../model/exercise/Exercise";
import ExerciseClient from "../../client/ExerciseClient";
import ExerciseMapper from "../../mapper/ExerciseMapper";
import NetState from "../../util/NetState";
import ExercisePaginationWidget from "../pagination/ExercisePaginationWidget";
import RCSentenceEditor from "../editor/RCSentenceEditor";
import RCSentenceMapper from "../../mapper/RCSentenceMapper";
import {MRCSentence} from "../../model/epage/MRCSentence";

export default function ExerciseWidget() {
    let params = useParams();
    let exerciseId = Number(params.exercise);

    let [exercise, setExercise] = useState(Exercise.builder().setId(exerciseId).build());
    let [netState, setNetState] = useState(NetState.NET_STATE_LOADING);

    useEffect(() => {
        console.log("API CALL")
        ExerciseClient.getExercise(exerciseId)
            .then(exe => {
                setExercise(ExerciseMapper.map(exe, 0))
                console.log(ExerciseMapper.map(exe, 0));
                setNetState(NetState.NET_STATE_OK)
            })
            .catch(e => setNetState(NetState.NET_STATE_ERROR))
    }, [])



    function cloneAndSetExercisePage(ex: Exercise, page: any) {
        ex = ex.clone();
        ex.selected = page;
        console.log(ex);
        return ex;
    }
    console.log(exercise.pages.length)
    return (
        <div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <h2>{exercise.title}</h2>
                    </div>
                </div>
            </div>
            {
                // Render pages here (ex todo)
            }
            <ExercisePaginationWidget
                excercise={exercise}
                pageNumber={exercise.selected}
                onSetPage={(page: any) => {
                    setExercise(ex => cloneAndSetExercisePage(ex, page));
                }}
                createNewDraft={() => {
                }}/>

                {
                // Render editor here

            }

            <RCSentenceEditor stageRCSentenceEdits={() => {
                }}
                rcSentenceDTO={
                    RCSentenceMapper.map(exercise.pages[exercise.selected] as MRCSentence)
                }/>
        </div>);
}