import React, { useState } from 'react';
import './App.css';
import Tablo from './Tablo';
import Button from './Button';
import Logo from './Logo';
import Dimych from './Dimych';

function App() {

    const maxValue = 6
    const [value, setValue] = useState(1)

    const incrementValue = () => {
        if (value < maxValue) {
            setValue(value + 1);
        }
    }
    const resetValue = () => {
        if (value > 0) {
            setValue(1);
        }
    }

    return (
        <>
            <Logo />
            <div className="App">
                <Tablo value={ value } className={ value < maxValue ? '' : 'activeValue' } />
                <div className={ 'buttons' }>
                    <Button onClickHandler={ incrementValue } title={ 'Следующий спринт' } disabled={ value === maxValue } />
                    <Button onClickHandler={ resetValue } title={ 'Начать заново' } disabled={ value === 1 } />
                </div>
            </div>
            <Dimych value={value} max={maxValue} />
        </>
    );
}

export default App;
