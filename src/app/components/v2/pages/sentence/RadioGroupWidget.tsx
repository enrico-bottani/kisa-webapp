import RadioGroupDTO from "../../../../dto/v2/radio/RadioGroupDTO";
import styles from "./RadioGroupWidget.module.css"
import {useEffect} from "react";
import SentenceAnswer from "../../../../model/v2/answer_sheet/SentenceAnswer";

export default function RadioGroupWidget(props:
                                             {
                                                 radioGroup: RadioGroupDTO,
                                                 index: number,
                                                 sentenceAnswer: SentenceAnswer,
                                                 setSelected: (responseId: number, index: number) => void
                                             }) {
    let showRadio = <></>;



    showRadio = <div className={"btn-group " + styles.GroupRadius}>{props.radioGroup.radioItems.map((r, i) => {
            {
                if (props.sentenceAnswer.completed) {
                    if (props.sentenceAnswer.responseId == r.id) {
                        return (<button key={i} className={"btn btn-secondary " + styles.GroupRadiusButton}
                                        disabled={props.sentenceAnswer.completed}
                                        onClick={() => {
                                            props.setSelected(r.id, props.index)
                                        }}>{r.value}</button>)
                    }
                    else {
                        return (<button key={i} className={"btn btn-outline-secondary " + styles.GroupRadiusButton}
                                        disabled={props.sentenceAnswer.completed}
                                        onClick={() => {
                                            props.setSelected(r.id, props.index)
                                        }}>{r.value}</button>)
                    }
                }
                return <button key={i} className={"btn btn-outline-secondary " + styles.GroupRadiusButton}
                               onClick={() => {
                                   props.setSelected(r.id, props.index)
                               }}>{r.value}</button>
            }
        }
    )}
    </div>


    return (showRadio)
}
