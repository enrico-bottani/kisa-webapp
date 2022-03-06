
import GenericTodoButton from './TodoPageGenericButton';
import styles from './TodoNumber.module.css';
interface Props {
    representingTodoNumber: number;
    currentTodoNumber: number;
    errorsNumber: number;
    onSetSelected: any;
    label: string;
    key: any;
}

function TodoPage(props: Props) {
    let btnClass = "btn rounded-0 ";
    let sign = <div></div>;

    if (props.errorsNumber > 0) {
        btnClass += "btn-outline-danger ";
        sign = <i className="bi bi-x"></i>;
    } else if (props.errorsNumber === -1) {
        if ((props.representingTodoNumber === props.currentTodoNumber)) btnClass += "btn-outline-primary " + styles.Selected + " "
        else btnClass += "btn-outline-secondary ";
    } else if (props.errorsNumber === 0) {
        btnClass += "btn-outline-success ";
        sign = <i className="bi bi-check-lg"></i>;
    }
    var id = "" + (props.representingTodoNumber + 1);

    return <GenericTodoButton<number>
    sign={sign}
    onClick={props.onSetSelected}
    label={props.label}
    id={id}
    btnClass={btnClass}
    param={props.representingTodoNumber}/>
}
export default TodoPage;
