import React from 'react';

type DisplayPropsType = {
    counter: number
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className={props.counter === 5 ? 'red' : 'count'}>{props.counter}</div>
    )
}