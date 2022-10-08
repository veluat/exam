import React from 'react';

type DisplayPropsType = {
    counter: number
    max: number
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className={props.counter === props.max ? 'red' : 'count'}>{props.counter}</div>
    )
}