export interface IAnswer {
    id: number;
    heading: string;
}

export interface IQuestion {
    id: number;
    title: string;
    answers: IAnswer[];
    correctId: number;
}

export interface ICorrectAnswer {
    correct: boolean;
    text: string;
}

export const questionData: IQuestion[] = [

]