import styles from "./SentenceWidget.module.css"
import ExerciseClient from "../../../../client/ExerciseClient";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import SentenceDTO from "../../../../dto/SentenceDTO";
import RadioGroupWidget from "./RadioGroupWidget";
import any = jasmine.any;


function mergeSentenceElements(sentence: SentenceDTO, mergedElements: any[]): number {
    let numberOfChoices = 0;
    for (let i = 0; i < sentence.strings.length; i++) {
        mergedElements.push(sentence.strings[i]);
        if (i + 1 < sentence.strings.length) {
            if (i < sentence.radios.length) {
                mergedElements.push(sentence.radios[i]);
                numberOfChoices++;
            }
        }
    }
    return numberOfChoices;
}

export default function SentenceWidget(props: { sentenceId: number }) {


    let [sentence, setSentence] = useState({strings: [], radios: []} as SentenceDTO);
    let [selectedAnswer, setSelectedAnswer] = useState(-1);
    //
    useEffect(() => {
        ExerciseClient.getSentenceById(props.sentenceId + "").then((e) => {
            setSentence(e)
            setSelectedAnswer((s) => -1);
        })
    }, [props.sentenceId]);

    let updateSelectedAnswer = function (answer: number) {
        setSelectedAnswer(answer);
    }

    let mergedElements = [] as any[];
    let numberOfChoices = mergeSentenceElements(sentence, mergedElements);

    let result = [<span key={"0"}/>];
    mergedElements.map(item => {
        if (typeof item == "string") {
            result.push(<p>{item}</p>)
        } else {
            let radioGroup = <RadioGroupWidget selected={selectedAnswer} radioGroup={item}
                                               setSelected={updateSelectedAnswer}/>
            result.push(radioGroup)
        }
    })



    return (
        <div className={styles.SentenceBackground}>
            <div style={{textAlign: "center"}}>{result}</div>
        </div>)
}
