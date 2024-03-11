import React from 'react';
import dim from '../../dim.jpg'

type FinishType = {
    value: number
    max: number
}
export const Finish = ( {value, max}: FinishType) => {
    return (
        <div className={ value < max ? 'dim' : 'dim dim-active'}>
            <img src={ dim } alt="" />
        </div>
    );
};