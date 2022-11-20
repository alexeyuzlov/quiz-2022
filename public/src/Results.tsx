export function Results(props: {correct: number, total: number, reset: () => void}) {
    return (
        <div className="card results">
            <p className="results__text">Вы ответили корректно на {props.correct} из {props.total} вопросов!</p>
            <button type="button" className="btn btn--primary" onClick={props.reset}>Начать заново</button>
        </div>
    )
}