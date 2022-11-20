import React from 'react';
import { Logo } from './Logo';
import { Counter } from './Counter';

export function Header(props: { index: number, total: number }) {
    return (
        <header className="header primary-container">
            <Logo/>
            <div className="spacer"></div>
            {props.total > 0 && <Counter index={props.index} total={props.total}/>}
        </header>
    );
}
