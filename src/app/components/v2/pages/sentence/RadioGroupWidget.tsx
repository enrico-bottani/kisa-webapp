import RadioGroupDTO from "../../../../dto/v2/radio/RadioGroupDTO";

export default function RadioGroupWidget(props: { radioGroup: RadioGroupDTO, setSelected: (a: number) => void }) {
    let showRadio = <></>;

    showRadio = <div>{props.radioGroup.radioItems.map((r) =>
        <button onClick={() => {props.setSelected(r.id)}}>{r.value}</button>)}
    </div>

    return (showRadio)
}
