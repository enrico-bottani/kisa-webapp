import styles from "./SentenceWidget.module.css"
import ExerciseClient from "../../../../client/ExerciseClient";
import {useEffect, useState} from "react";
import SentenceDTO from "../../../../dto/SentenceDTO";
import RadioGroupWidget from "./RadioGroupWidget";
import SentenceAnswers from "../../../../model/v2/answer_sheet/SentenceAnswers";
import SentenceAnswer from "../../../../model/v2/answer_sheet/SentenceAnswer";


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


    let [mergedSentence, setMergedSentence] = useState([] as any[]);
    let [selectedAnswers, setSelectedAnswers] = useState(new SentenceAnswers([] as SentenceAnswer[]));

    let [sentenceId, setSentenceId] = useState(-1);


    //
    useEffect(() => {
        console.log("something changed")
        if (props.sentenceId !== sentenceId) {
            ExerciseClient.getSentenceById(props.sentenceId + "").then((e) => {
                let mergedElements = [] as any[];
                let radiosNumber = mergeSentenceElements(e, mergedElements);
                setSelectedAnswers(SentenceAnswers.EMPTY(radiosNumber));
                setMergedSentence(mergedElements)

                setSentenceId(props.sentenceId)
            })
        }
    }, [props.sentenceId]);


    let updateSentenceAnswer = function (answer: number, index: number) {
        setSelectedAnswers((sentenceAnswers => {
            sentenceAnswers.answers[index] = SentenceAnswer.RESPONSE(answer);
            let s = new SentenceAnswers(sentenceAnswers.answers);
            return s;
        }));

    }


    let result = [] as JSX.Element[];
    let index = 0;
    mergedSentence.map((item, i) => {
        if (typeof item == "string") {
            result.push(<p key={i}>{item}</p>)
        } else {
            let radioGroup = <RadioGroupWidget key={i}
                                               index={index}
                                               sentenceAnswer={selectedAnswers.answers[index]}
                                               radioGroup={mergedSentence[i]}
                                               setSelected={updateSentenceAnswer}/>
            result.push(radioGroup)
            index++;
        }
    })

    return (
        <div className={"container "}>
            <div className="row">
                <div className={"col-12 "+ styles.SentenceBackground}>
                    <div>{result}</div>
                </div>
            </div>
        </div>)
}
