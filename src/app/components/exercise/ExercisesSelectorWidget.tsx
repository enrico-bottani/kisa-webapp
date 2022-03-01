import {useEffect, useState} from "react";
import ExerciseClient from "../../client/ExerciseClient";
import ExerciseMapper from "../../mapper/ExerciseMapper";
import Exercise from "../../model/exercise/Exercise";

export default function ExercisesSelectorWidget() {
    let NET_STATE_LOADING = -1;
    let NET_STATE_OK = 0;
    let NET_STATE_ERROR = 1;
    let [exercises, setExercises] = useState([Exercise.builder().build()]);
    let [netState, setNetState] = useState(NET_STATE_LOADING);

    useEffect(() => {
        ExerciseClient.getExercises()
            .then(exercises => {
                setExercises(exercises.map(ExerciseMapper.map))
                setNetState(NET_STATE_OK)

            })
            .catch(e => setNetState(NET_STATE_ERROR))
    }, [])

    // Rendering logic
    var element = <></>
    switch (netState) {
        case NET_STATE_OK: {
           element = <>{exercises.map(exe=>{return <div key={exe.id}>{exe.id} {exe.title}</div>})}</>
        }
    }

    return (<div>
        {element}
    </div>)
}