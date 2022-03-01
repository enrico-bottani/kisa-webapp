import styles from "./StringElement.module.css";
import {STRConstantDTO} from "../../../../dto/assignable/STRConstantDTO";

interface Props {
    stringConstant: STRConstantDTO;
    editMode: number;
}
function StringElement(props: Props) {
    let field;
    if (props.editMode === 1) {
        field =
            <div className="col-auto">
                <p className={styles.ParagraphStyle}>{props.stringConstant.string}</p>
            </div>
    }
    else field = <p>{props.stringConstant.string}</p>
    return field;
}
export default StringElement;