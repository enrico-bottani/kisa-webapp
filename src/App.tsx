import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ExerciseClient from "./app/client/ExerciseClient";
import Exercise from "./app/model/exercise/Exercise";
import ExerciseMapper from "./app/mapper/ExerciseMapper";
import TodosPagination from "./app/components/pagination/TodosPagination";
import ExercisesSelectorWidget from "./app/components/exercise/ExercisesSelectorWidget";

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
                <link
                    href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"/>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <h1>Choose an exercise</h1>
                        <ExercisesSelectorWidget/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
