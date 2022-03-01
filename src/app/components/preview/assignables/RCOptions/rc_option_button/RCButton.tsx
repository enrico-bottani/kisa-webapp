import styles from './RCButton.module.css'
interface Props {
    answerI: number;
    choice: string;
    gapKey: number;
    editMode: number;
}
function RCButton(props: Props) {
    let gapKey = props.gapKey + "_" + props.answerI + "";

    return (<div>
        <input type="radio" className="btn-check" name={props.gapKey + ""} id={gapKey} />
        <label className={"btn " + styles.Choice} htmlFor={gapKey}>{props.choice}</label>
    </div>)
}
export default RCButton;