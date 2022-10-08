import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Button} from "./Button";
import {SelectButton} from "./SelectButton";

function App() {
    const STARTVALUE = 0;
    const MAXVALUE = 5;
    const STEP = 1;
    const [counter, setCounter] = useState<number>(STARTVALUE)
    const onClickAddHandler = () => {
        if (counter < MAXVALUE && counter >= STARTVALUE) {
            setCounter(count => count + STEP)
        }
    }
    const onClickResetHandler = () => {
        setCounter(STARTVALUE)
    }

    const selectStartNumber = (e: ChangeEvent<HTMLInputElement>) => {
            setCounter(+e.currentTarget.value);
    }

    return (
        <div className="App">
            <Display counter={counter} max={MAXVALUE}/>
            <Button name={'Add'} isDisabled={counter === MAXVALUE} callback={onClickAddHandler}/>
            <Button name={'Reset'} isDisabled={counter === STARTVALUE} callback={onClickResetHandler}/>
            <SelectButton selectStartNumber={selectStartNumber} counter={counter} />
        </div>
    );
}

export default App;
