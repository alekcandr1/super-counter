// @flow
import * as React from 'react';
import { ChangeEvent } from 'react';

type InputProps = {
    value: number,
    onChange: ( value: number ) => void
    error: boolean
}

export const Input = ( {value, onChange, error}: InputProps ) => {

    const onChangeHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
        onChange(+e.currentTarget.value)
    }

    return (
        <input
            className={error ? '' : 'errorInput'}
            type="number"
            value={ value }
            onChange={ onChangeHandler } />
    );
};