import React from 'react';
import dim from './dim.jpg'

type DimychType = {
    value: number
    max: number
}
const Dimych = ( {value, max}: DimychType) => {
    return (
        <div className={ value < max ? 'dim' : 'dim dim-active'}>
            <img src={ dim } alt="" />
        </div>
    );
};

export default Dimych;