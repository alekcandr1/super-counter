import React, { useState } from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Finish } from './components/finish/Finish';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

function App() {
    const [maxValue, setMaxValue] = useState<number>(4)
    const [startValue, setStartValue] = useState<number>(1)
    const [currentValue, setCurrentValue] = useState<number>(startValue)
    const [error, setError] = useState<boolean>(false)
    const errorText = 'Введите корректное значение'
    const settingText = 'Установите значения'
    const [isActiveSettingMode, setIsActiveSettingMode] = useState(false)

    return <div className="App">
        <Logo />

        <Settings
            setMaxValue={ setMaxValue }
            maxValue={ maxValue }
            startValue={ startValue }
            setCurrentValue={ setCurrentValue }
            setStartValue={ setStartValue }
            setIsActiveSettingMode={ setIsActiveSettingMode }
            isActiveSettingMode={ isActiveSettingMode }
            error={ error }
            setError={ setError }
        />

        <Counter
            currentValue={ currentValue }
            maxValue={ maxValue }
            setValue={ setCurrentValue }
            startValue={ startValue }
            settingText={ settingText }
            errorText={ errorText }
            isActiveSettingMode={ isActiveSettingMode }
            error={ error }
        />

        <Finish value={ currentValue } max={ maxValue } />
    </div>
}

export default App;
