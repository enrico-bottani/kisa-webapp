import SentenceAnswer from "./SentenceAnswer";

export default class SentenceAnswers {
    constructor(answers: SentenceAnswer[]) {
        this.answers = new Array(answers.length);
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].completed)
                this.answers[i] = SentenceAnswer.RESPONSE(answers[i].responseId)
            else this.answers[i] = SentenceAnswer.EMPTY()
        }
    }

    completed(): boolean {
        for (let i = 0; i < this.answers.length; i++) {
            if (!this.answers[i].completed) return false;
        }
        return true;
    }

    static EMPTY(length: number) {
        let answers = new Array(length);
        for (let i = 0; i < length; i++) {
            answers[i] = SentenceAnswer.EMPTY()
        }
        return new SentenceAnswers(answers);
    }

    answers: SentenceAnswer[];
}
