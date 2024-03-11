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
            <span className={className}>Ты на спринте: {value}</span>
        </div>
    );
};

export default Tablo;