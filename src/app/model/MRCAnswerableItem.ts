import MRCAnswerableItemDTO from "../dto/item/MRCAnswerableItemDTO";

export default class MRCAnswerableItem implements MRCAnswerableItemDTO {
    id: number;
    choice: string;
    solution: number;

    constructor(id: number, choice: string, solution: number) {
        this.id = id;
        this.choice = choice;
        this.solution = solution;
    }

    public clone(): MRCAnswerableItem {
        let rtn = new MRCAnswerableItem(this.id, this.choice, this.solution);
        return rtn;
    }

    public cloneDeletingCircularReferences(): MRCAnswerableItem {
        let rtn = new MRCAnswerableItem(this.id, this.choice, this.solution);
        return rtn;
    }
}
