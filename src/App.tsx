import React, { useEffect, useState } from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Finish } from './components/finish/Finish';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

function App() {
    const [maxValue, setMaxValue] = useState(JSON.parse(localStorage.getItem('maxValue') || 4+ ''))
    const [startValue, setStartValue] = useState(JSON.parse(localStorage.getItem('startValue') || 1+ ''))
    const [currentValue, setCurrentValue] = useState(JSON.parse(localStorage.getItem('currentValue') || startValue+ ''))

    const [error, setError] = useState(false)
    const errorText = 'Недопустимое значение'

    const settingText = 'Введите значения'
    const [isActiveSettingMode, setIsActiveSettingMode] = useState(false)

    useEffect(()=>{
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('currentValue', JSON.stringify(currentValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [currentValue,startValue,maxValue])


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
