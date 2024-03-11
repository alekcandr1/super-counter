// @flow
import * as React from 'react';
import { ChangeEvent } from 'react';

type InputProps = {
    value: number,
    onBlur: ( value: number ) => void
}

export const Input = ( props: InputProps ) => {

    const onChangeHandler = ( e: ChangeEvent<HTMLInputElement> ) => {
        props.onBlur(+e.currentTarget.value)
    }

    return (
        <input type="number" value={ props.value } onChange={ onChangeHandler } />
    );
};