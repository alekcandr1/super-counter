import * as React from 'react';
import s from './Settings.module.css'
import Button from '../Button';
import { useEffect, useState } from 'react';
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

    const [maxValueSetting, setMaxValueSetting] = useState(JSON.parse(localStorage.getItem('maxValueSetting') || maxValue + ''))

    const [startValueSetting, setStartValueSetting] = useState(JSON.parse(localStorage.getItem('startValueSetting') || startValue + ''))

    useEffect(() => {
        localStorage.setItem('maxValueSetting', JSON.stringify(maxValueSetting))
        localStorage.setItem('startValueSetting', JSON.stringify(startValueSetting))
    }, [maxValueSetting, startValueSetting])

    const maxCondition = maxValueSetting >= 2
    const startCondition = startValueSetting < maxValueSetting && startValueSetting > 0

    setError(!(maxCondition && startCondition))
    setIsActiveSettingMode(maxValueSetting !== maxValue || startValueSetting !== startValue)

    const setSettings = () => {
        setMaxValue(maxValueSetting)
        setStartValue(startValueSetting)
        setCurrentValue(startValueSetting)
    }

    const onChangeHandlerMAX = ( newMaxValue: number ) => {
        setMaxValueSetting(newMaxValue)
    };

    const onChangeHandlerSTART = ( newStartValue: number ) => {
        setStartValueSetting(newStartValue)
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