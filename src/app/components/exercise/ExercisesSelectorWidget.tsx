import {useEffect, useState} from "react";
import ExerciseClient from "../../client/ExerciseClient";
import ExerciseMapper from "../../mapper/ExerciseMapper";
import Exercise from "../../model/exercise/Exercise";
import NetState from "../../util/NetState";

export default function ExercisesSelectorWidget(props:{editMode?:boolean}) {

    let [exercises, setExercises] = useState([Exercise.builder().build()]);
    let [netState, setNetState] = useState(NetState.NET_STATE_LOADING);

    useEffect(() => {
        ExerciseClient.getExercises()
            .then(exercises => {
                setExercises(exercises.map(ExerciseMapper.map))
                setNetState(NetState.NET_STATE_OK)

            })
            .catch(e => setNetState(NetState.NET_STATE_ERROR))
    }, [])


    let exercisePath = "/exercises/"
    if(props.editMode===true){
        exercisePath ="/edit"+exercisePath;
    }

    // Rendering logic
    var element;
    switch (netState) {
        case NetState.NET_STATE_OK: {
            element = (<>{exercises.map(exe => {
                    return (
                        <div key={exe.id}><a href={exercisePath + exe.id}>{exe.id}&nbsp;{exe.title}</a></div>
                    )})}
                </>
            )
            break;
        }
        default:
            element = <></>;
            break;
    }

    return (<div>
        {element}
    </div>)
}
