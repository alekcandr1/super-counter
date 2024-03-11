import React from 'react';

type TabloType = {
    value: number
    className: string
}
const Tablo = ( {value, className}: TabloType) => {

    const tablo = {
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div style={ tablo }>
            <h1 className={className}>Ты на спринте: {value}</h1>
        </div>
    );
};

export default Tablo;