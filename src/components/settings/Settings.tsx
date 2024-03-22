// @flow
import * as React from 'react';
import s from './Settings.module.css'
import Button from '../Button';
import { useState } from 'react';
import { Input } from '../Input';

type SettingsPropsType = {
    setMaxValue: ( maxValue: number ) => void
    maxValue: number
    value: number
    setValue: ( value: number ) => void
    startValue: number
    setStartValue: ( value: number ) => void

};
export const Settings = ( props: SettingsPropsType ) => {
    const [status, setStatus] = useState(true)
    const [maxValue, setMaxValue] = useState<number>(props.maxValue)
    const [value, setValue] = useState<number>(props.value)

    const setSettings = () => {
        props.setMaxValue(maxValue)
        props.setValue(value)
        props.setStartValue(value)
        setStatus(true)
    }

    const onChangeHandlerMAX = ( newMaxValue: number ) => {
        setMaxValue(newMaxValue);
        setStatus(newMaxValue === props.maxValue);
    };

    const onChangeHandlerSTART = ( newStartValue: number ) => {
        setValue(newStartValue)
        setStatus(newStartValue === props.value)
    }

    return (
        <div className={ s.settings }>
            <div className={ s.fields }>
                <div>
                    <span>Всего спринтов</span>
                    <Input value={ maxValue } onBlur={ onChangeHandlerMAX } />
                </div>
                <div>
                    <span>Стартовый спринт</span>
                    <Input value={ value } onBlur={ onChangeHandlerSTART } />
                </div>
            </div>
            <Button title={ 'СТАРТ' } onClickHandler={ setSettings } disabled={ status } />
        </div>
    );
};