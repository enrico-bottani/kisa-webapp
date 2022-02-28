import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ExerciseClient from "./app/client/ExerciseClient";
import Exercise from "./app/model/exercise/Exercise";
import ExerciseMapper from "./app/mapper/ExerciseMapper";

function App() {
    let [exercise, setExercise] = useState(Exercise.builder().build())
    ExerciseClient.getExercises()
        .then(exercise => {
            console.log(exercise)
            console.log(ExerciseMapper.map(exercise[0], 0))
        })
        .catch(e => console.error("Net. error"))
    return (
        <div className="App">
            <header className="App-header">
            </header>
        </div>
    );
}

export default App;
