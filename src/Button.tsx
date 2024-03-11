import React from 'react';

type ButtonType = {
    title: string
    onClickHandler: () => void
    disabled: boolean
}
const Button = ( props: ButtonType ) => {

    const onClickHandler = () => {
        props.onClickHandler()
    }

    return (
        <button
            disabled={ props.disabled }
            onClick={ onClickHandler }
        >
            { props.title }
        </button>
    );
};

export default Button;