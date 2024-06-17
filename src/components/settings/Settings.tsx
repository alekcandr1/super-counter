import * as React from 'react';
import s from './Settings.module.css'
import Button from '../Button';
import { useState } from 'react';
import { Input } from '../Input';

type SettingsPropsType = {
    setMaxValue: ( maxValue: number ) => void
    maxValue: number
    startValue: number
    setStartValue: ( value: number ) => void
    setCurrentValue: ( value: number ) => void
    setError: ( value: boolean ) => void
    setIsActiveSettingMode: ( mode: boolean ) => void
    isActiveSettingMode: boolean
    error: boolean
};

export const Settings = ( {
                              setMaxValue,
                              maxValue,
                              startValue,
                              setStartValue,
                              setCurrentValue,
                              setError,
                              setIsActiveSettingMode,
                              isActiveSettingMode,
                              error,
                          }: SettingsPropsType ) => {

    const [maxValueSetting, setMaxValueSetting] = useState(maxValue)
    const [startValueSetting, setStartValueSetting] = useState(startValue)

    const maxCondition = maxValueSetting >= 2
    const startCondition = (startValue < maxValueSetting) && (startValue > 0)

    const checkConditions = (maxValueForChecking: number, startValueForChecking: number) => {
        const maxCondition = maxValueForChecking >= 2
        const startCondition = (startValueForChecking < maxValueForChecking) && (startValueForChecking > 0)
        setError(!(maxCondition && startCondition))
    }

    const setSettings = () => {
        setMaxValue(maxValueSetting)
        setStartValue(startValueSetting)
        setCurrentValue(startValueSetting)
        setIsActiveSettingMode(false)
    }

    const onChangeHandlerMAX = ( newMaxValue: number ) => {
        setIsActiveSettingMode(newMaxValue !== maxValue || startValueSetting !== startValue)
        setMaxValueSetting(newMaxValue)
        checkConditions(newMaxValue, startValueSetting)
    };

    const onChangeHandlerSTART = ( newStartValue: number ) => {
        setStartValueSetting(newStartValue)
        setIsActiveSettingMode(maxValueSetting !== maxValue || newStartValue !== startValue)
        checkConditions(maxValueSetting, newStartValue)

    }

    return (
        <div className={ s.settings }>
            <div className={ s.fields }>
                <div>
                    <span>Всего спринтов:</span>
                    <Input error={ maxCondition } value={ maxValueSetting } onChange={ onChangeHandlerMAX } />
                </div>
                <div>
                    <span>Стартовый спринт:</span>
                    <Input error={ startCondition } value={ startValueSetting } onChange={ onChangeHandlerSTART } />
                </div>
            </div>
            <Button title={ 'ЛЕТИМ 🚀' }
                    onClickHandler={ setSettings }
                    disabled={ error || !isActiveSettingMode }
            />
        </div>
    );
};