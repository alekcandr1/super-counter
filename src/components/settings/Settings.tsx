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

    const onChangeHandlerMAX = ( newValue: number ) => {
        setMaxValue(newValue);
        setStatus(newValue === props.maxValue);
    };

    const onChangeHandlerMIN = ( newValue: number ) => {
        setValue(newValue)
        setStatus(newValue === props.value)
    }

    return (
        <div className={ s.settings }>
            <div className={ s.fields }>
                <div>
                    <span>Всего спринтов</span>
                    <Input value={ maxValue } onBlur={ onChangeHandlerMAX } />
                </div>
                <div>
                    <span>Текущий спринт</span>
                    <Input value={ value } onBlur={ onChangeHandlerMIN } />
                </div>
            </div>
            <Button title={ 'СТАРТ' } onClickHandler={ setSettings } disabled={ status } />
        </div>
    );
};