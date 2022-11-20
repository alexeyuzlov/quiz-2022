import React from 'react';
import { ICorrectAnswer } from './entities';

export function CorrectAnswer(props: { answer: ICorrectAnswer, next: () => void }) {
    return (
        <div className="correct-answer">
            {
                props.answer.correct
                    ? <h2 className="heading heading--sub text-success">Верно!</h2>
                    :
                    <>
                        <h2 className="heading heading--sub text-fail">Неверно!</h2>
                        <h3>Правильный ответ</h3>
                        <p>{props.answer.text}</p>
                    </>
            }

            <button
                className="btn btn--default"
                type="button"
                onClick={props.next}
            >
                Далее
            </button>
        </div>
    )
}