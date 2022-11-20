import React from 'react';

export function Counter(props: { index: number, total: number }) {
    return (
        <div className="counter">Вопрос: {props.index + 1} из {props.total}</div>
    )
}