import React, { Reducer, useCallback, useEffect, useReducer, useState } from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Finish } from './components/finish/Finish';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';
import {
    ActionsType,
    CounterReducer,
    setCurrentValueAC, setErrorAC,
    setMaxValueAC,
    setStartValueAC,
    StateType
} from './redux/counter-reducer';

function App() {

    const [state, dispatchState] = useReducer<Reducer<StateType, ActionsType>>(CounterReducer, {
        maxValue: 4,
        startValue: 1,
        currentValue: 1,
        error: false,
        errorText: 'Недопустимое значение',
        settingText: 'Введите значения'
    })

    const [isActiveSettingMode, setIsActiveSettingMode] = useState(false)

    const setMaxValueHandler = useCallback((maxValue: number) => {
        dispatchState(setMaxValueAC(maxValue))
    }, [dispatchState])
    const setCurrentValueHandler = useCallback((currentValue: number) => {
        dispatchState(setCurrentValueAC(currentValue))
    }, [dispatchState])
    const setStartValueHandler = useCallback((startValue: number) => {
        dispatchState(setStartValueAC(startValue))
    }, [dispatchState])
    const setErrorHandler = useCallback((error: boolean) => {
        dispatchState(setErrorAC(error))
    }, [dispatchState])

    return <div className="App">
        <Logo />

        <Settings
            setMaxValue={ setMaxValueHandler }
            maxValue={ state.maxValue }
            startValue={ state.startValue }
            setCurrentValue={ setCurrentValueHandler }
            setStartValue={ setStartValueHandler }
            setIsActiveSettingMode={ setIsActiveSettingMode }
            isActiveSettingMode={ isActiveSettingMode }
            error={ state.error }
            setError={ setErrorHandler }
        />

        <Counter
            currentValue={ state.currentValue }
            maxValue={ state.maxValue }
            setValue={ setCurrentValueHandler }
            startValue={ state.startValue }
            settingText={ state.settingText }
            errorText={ state.errorText }
            isActiveSettingMode={ isActiveSettingMode }
            error={ state.error }
        />

        <Finish value={ state.currentValue } max={ state.maxValue } />
    </div>
}

export default App;
