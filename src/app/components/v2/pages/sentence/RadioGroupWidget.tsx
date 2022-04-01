import RadioGroupDTO from "../../../../dto/v2/radio/RadioGroupDTO";
import styles from "./RadioGroupWidget.module.css"
import {useEffect} from "react";

export default function RadioGroupWidget(props: { radioGroup: RadioGroupDTO, selected: number, setSelected: (a: number) => void }) {
    let showRadio = <></>;
    showRadio = <div className={"btn-group " + styles.GroupRadius}>{props.radioGroup.radioItems.map((r) => {
            {
                if (props.selected !== -1) {
                    if (r.correct) {

                        return <button className={"btn btn-success " + styles.GroupRadiusButton}
                                       onClick={() => {
                                           props.setSelected(r.id)
                                       }}>{r.value}</button>
                    }
                    else {

                        return <button className={"btn btn-outline-danger " + styles.GroupRadiusButton}
                                       onClick={() => {
                                           props.setSelected(r.id)
                                       }}>{r.value}</button>
                    }
                } else {
                    console.log(r)
                    return <button className={"btn btn-outline-secondary " + styles.GroupRadiusButton}
                                   onClick={() => {
                                       props.setSelected(r.id)
                                   }}>{r.value}</button>
                }
            }
        }
    )}
    </div>


    return (showRadio)
}
