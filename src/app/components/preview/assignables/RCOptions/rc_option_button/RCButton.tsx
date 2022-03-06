import styles from './RCButton.module.css'
import {useEffect, useState} from "react";
import MRCAnswerableItem from "../../../../../model/MRCAnswerableItem";
interface Props {
    choice: MRCAnswerableItem;
    gapKey: number;
    editMode: number;
    givenAnswer:number;
    notifyChange(id:number): void;
}
function RCButton(props: Props) {
    let gapKey = props.gapKey + "_" + props.choice.id + "";
    function onClick(e: React.FormEvent<HTMLButtonElement>) {
        props.notifyChange(props.choice.id)
        console.log(e);
    }

    let active = " btn-outline-secondary";
    if(props.givenAnswer===props.choice.id && props.choice.solution===1){
        active = " btn-outline-success active"
    }else if (props.givenAnswer===props.choice.id){
        active = " btn-outline-secondary active"
    }


    return (<>
        <button  onClick={(e)=>onClick(e)} className={"btn  rounded-0 "+active}>
            {props.choice.choice}
        </button>
    </>)
}
export default RCButton;
