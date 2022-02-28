export class Assignable {
    type: string;
    position:number;
    id:number;

    constructor(id:number, type:string,position:number) {
        this.type=type;
        this.position = position;
        this.id = id;
    }

}