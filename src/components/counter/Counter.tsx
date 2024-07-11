import * as React from 'react';
import Tablo from './Tablo';
import Button from '../Button';
import s from './Counter.module.css';
import { useSelector } from 'react-redux';
import { AppRootStoreType, useAppDispatch } from '../../redux/store';
import { incCurrentValueAC, resetCurrentValueAC, StateType } from '../../redux/counter-reducer';
import { useCallback } from 'react';

type CounterPropsType = {
    isActiveSettingMode: boolean
};
export const Counter = ( {isActiveSettingMode}: CounterPropsType ) => {
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(getCurrentValueTC())
    // }, [dispatch])

    const counter = useSelector<AppRootStoreType, StateType>(state => state.counter)
    const {maxValue, startValue, currentValue, settingText, errorText, error} = counter

    const incCurrentValue = useCallback(() => {
        dispatch(incCurrentValueAC())
    }, [dispatch, currentValue])

    const resetValue = () => {
        if (startValue > 0) {
            dispatch(resetCurrentValueAC())
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
                <Button onClickHandler={ incCurrentValue }
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