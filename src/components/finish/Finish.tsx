import React from 'react';
import dim from '../../dim.jpg'
import { useSelector } from 'react-redux';
import { AppRootStoreType } from '../../redux/store';
import { StateType } from '../../redux/counter-reducer';

type FinishType = {}
export const Finish = ( props: FinishType ) => {
    const counter = useSelector<AppRootStoreType, StateType>(state => state.counter)
    const {maxValue, currentValue} = counter

    return (
        <div className={ currentValue < maxValue ? 'dim' : 'dim dim-active' }>
            <h3>Ты красавчик!</h3>
            <img src={ dim } alt="" />
        </div>
    );
};