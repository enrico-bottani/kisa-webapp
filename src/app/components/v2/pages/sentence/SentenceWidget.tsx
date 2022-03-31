import styles from "./SentenceWidget.module.css"
import ExerciseClient from "../../../../client/ExerciseClient";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import internal from "stream";
import SentenceDTO from "../../../../dto/SentenceDTO";
import RadioGroupWidget from "./RadioGroupWidget";


function mergeSentenceElements(sentence: SentenceDTO): any[] {
    let mergedElements = [];
    for (let i = 0; i < sentence.strings.length; i++) {
        mergedElements.push(sentence.strings[i]);
        if (i + 1 < sentence.strings.length) {
            if (i < sentence.radios.length) {
                mergedElements.push(sentence.radios[i]);
            }
        }
    }
    return mergedElements;
}

export default function SentenceWidget(props: { sentenceId: number }) {


    let [sentence, setSentence] = useState({strings: [], radios: []} as SentenceDTO);
    let [selectedAnswer, setSelectedAnswer] = useState(-1);

    //
    useEffect(() => {
        ExerciseClient.getSentenceById(props.sentenceId + "").then((e) => {
            setSentence(e)
        })

    }, [props.sentenceId]);

    let updateSelectedAnswer = function (answer:number){

        localStorage.setItem(props.sentenceId+"",answer+"");
        setSelectedAnswer(answer);
    }

    let mergedElements = mergeSentenceElements(sentence);

    let result = [<span key={"0"}/>];
    mergedElements.map(item => {
        if (typeof item == "string") {
            result.push(<div>{item}</div>)
        } else {
            let radioGroup = <RadioGroupWidget radioGroup={item} setSelected={updateSelectedAnswer}/>
            result.push(radioGroup)
        }
    })

    return (
        <div>
            <div>{result}</div>
            {selectedAnswer}
        </div>)
}
