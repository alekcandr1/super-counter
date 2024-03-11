import * as React from 'react';
import Tablo from './Tablo';
import Button from '../Button';
import s from './Counter.module.css';
import { useState } from 'react';

type CounterPropsType = {
    value: number,
    maxValue: number
    setValue: ( value: number ) => void
    startValue: number
};
export const Counter = ( {value, maxValue, setValue, startValue}: CounterPropsType ) => {
    const [status, setStatus] = useState(true)

    const incrementValue = () => {
        if (value < maxValue) {
            setValue(value + 1);
            setStatus(false)
        }
    }
    const resetValue = () => {
        setStatus(true)
        if (startValue > 0) {
            setValue(startValue);
        }
    }

    return (
        <div className={s.mainCounter}>
            <Tablo value={ value } className={ value < maxValue ? '' : 'activeValue' } />
            <div className={ 'buttons' }>
                <Button onClickHandler={ incrementValue } title={ 'Следующий спринт' }
                        disabled={ value === maxValue } />
                <Button onClickHandler={ resetValue } title={ 'Начать заново' } disabled={ status } />
            </div>
        </div>
    );
};