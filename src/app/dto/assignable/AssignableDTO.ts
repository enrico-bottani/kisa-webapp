export interface AssignableDTO {
    type: string;
}
export namespace AssignableDTO {
    export enum Type {
        RCAnswerable = "RCA",
        String = "STR",
        Undefined = "UND"
    }
}