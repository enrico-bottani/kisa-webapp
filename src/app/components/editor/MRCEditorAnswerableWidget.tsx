import MRCAnswerable from "../../model/assignable/MRCAnswerable";
import MRCAnswerableItem from "../../model/MRCAnswerableItem";
import Editor_MRCAnswerableItem_Widget from "./Editor_MRCAnswerableItem_Widget";
import ExerciseClient from "../../client/ExerciseClient";

/**
 * Multiple Radio Choice Answerable Widget
 * @param props
 * @constructor
 */
export default function MRCEditorAnswerableWidget(props: {
    mrcAnswerable: MRCAnswerable,
    fetchExercise: () => void,
}) {

    function onCheckChange(id: number, state: number) {
        if (state !== 1) return;
        // Si attiva solo se uno stato è stato cambiato in 1
        console.log("on checkChange " + id + " state: " + state);
        let answItems: MRCAnswerableItem[] = props.mrcAnswerable.answerableItems.map(answItem => {
            return answItem.cloneDeletingCircularReferences();
        })
        // Trova a chi appartiene l'id e pushalo. (TODO: Posso farmi passare direttamente l'oggetto)
        for (let i = 0; i < answItems.length; i++) {
            if (answItems[i].id === id){
                answItems[i].solution = 1;
                ExerciseClient.putAnswerableItem(answItems[i].id, answItems[i]).then(e => {
                    console.log(e)
                }).then(()=>props.fetchExercise());
                break;
            }}

    }

    let mrcAnswerableElement = props.mrcAnswerable.answerableItems.map(answerableItem => {
        return (<Editor_MRCAnswerableItem_Widget fetchExercise={props.fetchExercise}
                                                 answerableItem={answerableItem}
                                                 onCheckChange={onCheckChange}
                                                 key={answerableItem.id}/>)
    });
    return (<>{mrcAnswerableElement}</>)
}