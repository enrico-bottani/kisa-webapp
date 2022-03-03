export interface AssignableDTO {
    type: string;
    position:number;
    id:number;
    _exerciseId:number;
    _exercisePageId:number;
}
export namespace AssignableDTO {
    export enum Type {
        RCAnswerable = "RCA",
        String = "STR",
        Undefined = "UND"
    }
}