import React, { FormEvent, useEffect, useState } from 'react';
import { IAnswer, IQuestion } from './entities';

export function Question(props: { question: IQuestion, answered: (userAnswer: number) => void }) {
    const [answered, setAnswered] = useState<number | null>();
    const [submitted, setSubmitted] = useState<boolean>(false);

    const submit = (e: FormEvent<HTMLFormElement>) => {
        props.answered(answered!);
        setSubmitted(true);
        e.preventDefault();
    }

    useEffect(() => {
        setAnswered(null);
        setSubmitted(false);
    }, [props.question]);

    return (
        <div className="question card">
            <h1 className="heading question__heading">{props.question.title}</h1>

            <form className="question__answers rows" onSubmit={submit}>
                <div className="radio-group rows">
                    {props.question.answers.map((answer: IAnswer) => {
                        return (
                            <label key={answer.id} className="form-label radio-group-item">
                                <input
                                    type="radio"
                                    name="answer"
                                    value={answer.id}
                                    disabled={submitted}
                                    onChange={() => setAnswered(answer.id)}
                                />
                                {answer.heading}
                            </label>
                        )
                    })}
                </div>

                {/*<label>*/}
                {/*  <span className="form-label">Ответ</span>*/}
                {/*  <input className="text-field" type="text"/>*/}
                {/*</label>*/}

                <div className="form-footer">
                    <button
                        disabled={!answered || submitted}
                        className="btn--cta btn btn--primary"
                        type="submit"
                    >
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    )
}