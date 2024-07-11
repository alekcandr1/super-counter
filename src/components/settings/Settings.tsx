import * as React from 'react';
import s from './Settings.module.css'
import Button from '../Button';
import { useCallback, useState } from 'react';
import { Input } from '../Input';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStoreType } from '../../redux/store';
import {
    setCurrentValueAC,
    setErrorAC,
    setMaxValueAC,
    setStartValueAC,
    StateType
} from '../../redux/counter-reducer';

type SettingsPropsType = {
    isActiveSettingMode: boolean
    setIsActiveSettingMode: ( mode: boolean ) => void
};

export const Settings = ( {
                              isActiveSettingMode,
                              setIsActiveSettingMode,
                          }: SettingsPropsType ) => {
    const counter = useSelector<AppRootStoreType, StateType>(state => state.counter)
    const dispatch = useDispatch()
    const {maxValue, startValue, error} = counter


    const setMaxValue = useCallback((maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }, [dispatch])
    const setCurrentValue = useCallback((currentValue: number) => {
        dispatch(setCurrentValueAC(currentValue))
    }, [dispatch])
    const setStartValue = useCallback((startValue: number) => {
        dispatch(setStartValueAC(startValue))
    }, [dispatch])
    const setError = useCallback((error: boolean) => {
        dispatch(setErrorAC(error))
    }, [dispatch])

    const [maxValueSetting, setMaxValueSetting] = useState(maxValue)
    const [startValueSetting, setStartValueSetting] = useState(startValue)

    const maxCondition = maxValueSetting >= 2
    const startCondition = (startValue < maxValueSetting) && (startValue > 0)

    const checkConditions = ( maxValueForChecking: number, startValueForChecking: number ) => {
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