import React, {ChangeEvent} from 'react';

type SelectButtonPropsType = {
    selectStartNumber: (e: ChangeEvent<HTMLInputElement>) => void
    counter: number
}

export const SelectButton = (props: SelectButtonPropsType) => {

    return (
        <div className={'input'}>
            <div className={'text'}>Select start number:</div>
            <input type={"radio"} onChange={props.selectStartNumber} name="radioButton" value={0}/><span>0</span>
            <br/>
            <input type={"radio"} onChange={props.selectStartNumber} name="radioButton" value={1}/><span>1</span>
            <br/>
            <input type={"radio"} onChange={props.selectStartNumber} name="radioButton" value={2}/><span>2</span>
            <br/>
            <input type={"radio"} onChange={props.selectStartNumber} name="radioButton" value={3}/><span>3</span>
            <br/>
            <input type={"radio"} onChange={props.selectStartNumber} name="radioButton" value={4}/><span>4</span>
            <br/>
            <input type={"radio"} onChange={props.selectStartNumber} name="radioButton" value={5}/><span>5</span>
        </div>
    )
}