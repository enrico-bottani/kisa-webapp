export interface AssignableDTO {
    type: string;
    position:number;
    id:number;
    _parentId:number;
}
export namespace AssignableDTO {
    export enum Type {
        RCAnswerable = "RCA",
        String = "STR",
        Undefined = "UND"
    }
}