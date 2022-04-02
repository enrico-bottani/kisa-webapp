export default class SentenceAnswer {
    constructor(completed: boolean, responseId: number) {
        this.completed = completed;
        this.responseId = responseId;
    }

    static EMPTY() {
        return new SentenceAnswer(false, -1);
    }

    static RESPONSE(responseId: number) {
        return new SentenceAnswer(true, responseId);
    }

    completed: boolean;
    responseId: number;
}
