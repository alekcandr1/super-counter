import * as React from 'react';
import Tablo from './Tablo';
import Button from '../Button';
import s from './Counter.module.css';

type CounterPropsType = {
    currentValue: number,
    maxValue: number
    setValue: ( value: number ) => void
    startValue: number
    errorText: string
    settingText: string
    error: boolean
    isActiveSettingMode: boolean
};
export const Counter = ( {
                             currentValue,
                             maxValue,
                             setValue,
                             startValue,
                             settingText,
                             errorText,
                             isActiveSettingMode,
                             error
                         }: CounterPropsType ) => {

    const incrementValue = () => {
        if (currentValue < maxValue) {
            setValue(currentValue + 1);
        }
    }
    const resetValue = () => {
        if (startValue > 0) {
            setValue(startValue);
        }
    }

    return (
        <div className={ s.mainCounter }>
            <Tablo currentValue={ currentValue }
                   maxValue={ maxValue }
                   errorText={ errorText }
                   isActiveSettingMode={ isActiveSettingMode }
                   error={ error } settingText={ settingText }
            />
            <div className={ 'buttons' }>
                <Button onClickHandler={ incrementValue }
                        title={ 'Следующий спринт' }
                        disabled={ currentValue === maxValue }
                />
                <Button onClickHandler={ resetValue }
                        title={ 'Начать заново' }
                        disabled={ currentValue === startValue } />
            </div>
        </div>
    );
};