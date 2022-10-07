import React, {useState} from 'react';
import './App.css';
import {Display} from "./Tablo";
import {Button} from "./Button";

function App() {
    const MAXVALUE = 5;
    const STARTVALUE = 0;
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
    return (
        <div className="App">
            <Display counter={counter}/>
            <Button name={'Add'} isDisabled={counter === MAXVALUE} callback={onClickAddHandler}/>
            <Button name={'Reset'} isDisabled={counter === STARTVALUE} callback={onClickResetHandler}/>
        </div>
    );
}

export default App;
