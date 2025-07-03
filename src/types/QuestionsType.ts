export type QuestionType = {
    question: string,
    correct: number,
    answers: answersType[]
}

type answersType = {
    answer: string;
}