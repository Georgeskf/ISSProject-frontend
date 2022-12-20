export class Responses<T> {
    result!: Boolean;
    body!: T;
}

export class ArrayResponses<T> {
    result!: Boolean;
    body!: T[];
}