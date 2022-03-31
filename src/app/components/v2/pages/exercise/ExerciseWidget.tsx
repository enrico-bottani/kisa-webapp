import ExerciseClient from "../../../../client/ExerciseClient";
import React, {useEffect, useState} from "react";
import {Link, Outlet, useParams} from "react-router-dom";
import {ExerciseDTO} from "../../../../dto/exercise/ExerciseDTO";
import ReactMarkdown from 'react-markdown'
import AppRoutes from "../../../../route/AppRoutes";
import SentenceWidget from "../sentence/SentenceWidget";

interface ExerciseAnswerSheet {
    exerciseID: number;
    solutionsGiven: Map<number,number>;
}


export default function ExerciseWidget() {
    let {exerciseId} = useParams();
    let [exercise, setExercise] = useState({title: "[Title]"} as ExerciseDTO);

    let [editable, setEditable] = useState(false)
    let [sentence, setSentence] = useState(0);
    let [answerSheet, setAnswerSheet] = useState({} as ExerciseAnswerSheet);

    useEffect(() => {
        if (exerciseId != undefined) {

            ExerciseClient.getExercise(exerciseId).then((e) => {
                setExercise(e)
            })

            ExerciseClient.getExerciseEditable(exerciseId)
                .then(e => {
                    setEditable(e.editable)

                })
                .catch(e => {
                    console.error(e)
                })
        }
    }, [])

    function setAnswerForSentence(sentenceId: number, solution:number){
        setAnswerSheet(prevAnswerSheetState=>{
            prevAnswerSheetState.solutionsGiven.set(sentenceId, solution)
            return prevAnswerSheetState;
        })
    }


    let exercises = [<div key={0}/>];
    if (exercise.sentences !== undefined) {
        exercises = exercise.sentences.map(s =>
            <Link key={s.id} to={`/exercise/${exerciseId}/sentence/${s.id}`}>{s.id}</Link>
        )
    }


    return (
        <div className={"container"}>
            <div className="row pt-4">
                <div className="col-12 ">
                    <h1>{exercise.title}</h1>
                </div>
                {editable && <p>Add description</p>}
                <div className="col-12 ">
                    <h2>Sentences</h2>
                </div>
                <div className="row">
                    <span>{exercises}</span>
                </div>
            </div>


            <Outlet />
        </div>)
}
