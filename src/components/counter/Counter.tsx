import * as React from 'react';
import Tablo from './Tablo';
import Button from '../Button';
import s from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStoreType } from '../../redux/store';
import { setCurrentValueAC, StateType } from '../../redux/counter-reducer';
import { useCallback } from 'react';

type CounterPropsType = {
    isActiveSettingMode: boolean
};
export const Counter = ( {
                             isActiveSettingMode,
                         }: CounterPropsType ) => {

    const counter = useSelector<AppRootStoreType, StateType>(state => state.counter)
    const {maxValue, startValue, currentValue, settingText, errorText, error} = counter

    const dispatch = useDispatch()

    const setCurrentValue = useCallback((currentValue: number) => {
        dispatch(setCurrentValueAC(currentValue))
    }, [dispatch])

    const incrementValue = () => {
        if (currentValue < maxValue) {
            setCurrentValue(currentValue + 1);
        }
    }
    const resetValue = () => {
        if (startValue > 0) {
            setCurrentValue(startValue);
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