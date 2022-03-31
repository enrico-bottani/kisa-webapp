import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ExerciseClient from "../../../../client/ExerciseClient";
import AppRoutes from "../../../../route/AppRoutes";

export default function AllSeries() {
    var [series, setSeries] = useState([] as any[]);
    let {userName} = useParams();
    useEffect(() => {

        ExerciseClient.getAllSeriesByUser().then(e => {
            setSeries(e)
            console.log(e)
        }).catch(e => console.error(e));
    }, [])
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    <h1>Enrico</h1>
                </div>
                {series.map(seriesItem =>
                    <div className={"col-12 py-2"} key={seriesItem.title}>
                        <a href={AppRoutes.SERIES + "/" + seriesItem.id}>
                            <div className="card ">
                                <div className="card-body">
                                    <p className={"mb-0"}>
                                    {seriesItem.title}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>)
                }
            </div>
        </div>
    </>)
}
