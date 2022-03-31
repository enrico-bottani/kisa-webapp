import ExerciseClient from "../../../../client/ExerciseClient";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {SeriesDTO} from "../../../../dto/series/SeriesDTO";
import {ExerciseDTO} from "../../../../dto/exercise/ExerciseDTO";
import App from "../../../../../App";
import AppRoutes from "../../../../route/AppRoutes";


export default function SeriesItemWidget() {
    let {seriesId} = useParams();
    let [editable, setEditable] = useState(false)
    let [seriesItem, setSeriesItem] = useState({
        title: "",
        exercises: [] as ExerciseDTO[],
        user: {userName: ""}
    } as SeriesDTO);
    useEffect(() => {
        if (seriesId !== undefined) {
            ExerciseClient.getSeriesById(seriesId)
                .then(e => {
                    console.log(e)
                    setSeriesItem(e)
                })
                .catch(e => {
                    console.error(e)
                })
            ExerciseClient.getSeriesEditable(seriesId)
                .then(e => {
                    console.log(e)
                    setEditable(e.editable)
                })
                .catch(e => {
                    console.error(e)
                })
        }
    }, [])

    return (<div className={"container"}>
        <div className="row">
            <div className="col-auto mt-4">
                <h1>{seriesItem.title}</h1>
            </div>
            <p>Author: {seriesItem.user.userName}</p>
            <div className="col-12">
                <h2>Exercises</h2>
            </div>
            {
                seriesItem.exercises.map(e => <div key={e.id} className={"col-12 py-2"}>
                    <a href={AppRoutes.EXERCISE + "/" + e.id}>
                        <div className="card">
                            <div className="card-body">{e.title}</div>
                        </div>
                    </a>
                    {editable && <div>Delete</div>}
                </div>)
            }
            {
                editable &&
                <div className={"col-12 py-2"}>
                    <a href={AppRoutes.EXERCISE + "/" + 1}>
                        <div className="card">
                            <div className="card-body">{"+ Add new"}</div>
                        </div>
                    </a>
                </div>
            }
        </div>
    </div>)
}
