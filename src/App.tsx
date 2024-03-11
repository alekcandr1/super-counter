import React, { useState } from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Finish } from './components/finish/Finish';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

function App() {
    const [maxValue, setMaxValue] = useState<number>(6)
    const [value, setValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(value)

    return <div className="App">
        <Logo />
        <Settings setMaxValue={ setMaxValue } maxValue={ maxValue } startValue={ startValue } value={value} setValue={setValue} setStartValue={setStartValue} />
        <Counter value={ value } maxValue={ maxValue } setValue={ setValue } startValue={startValue}/>
        <Finish value={ value } max={ maxValue } />
    </div>
}

export default App;
