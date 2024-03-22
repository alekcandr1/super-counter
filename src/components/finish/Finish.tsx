import React from 'react';
import dim from '../../dim.jpg'

type FinishType = {
    value: number
    max: number
}
export const Finish = ( {value, max}: FinishType) => {
    return (
        <div className={ value < max ? 'dim' : 'dim dim-active'}>
            <h3>Ты красавчик!</h3>
            <img src={ dim } alt="" />
        </div>
    );
};