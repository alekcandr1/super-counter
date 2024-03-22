import React from 'react';

type TabloType = {
    currentValue: number
    maxValue: number
    error: boolean
    errorText: string
    isActiveSettingMode: boolean
    settingText: string

}
const Tablo = ( {currentValue, maxValue, errorText, isActiveSettingMode, error, settingText}: TabloType ) => {

    const contentForCorrectValue = (
        <span className={ currentValue >= maxValue ? 'activeValue' : '' }>
            Ты на спринте: { currentValue }
        </span>
    )
    const contentForError = <span className={ 'error' }>{ errorText }</span>
    const contentForSettingMode = <span>{ settingText }</span>


    let contentTablo;

    if (error) contentTablo = contentForError
    else {
        if (isActiveSettingMode) contentTablo = contentForSettingMode
        else contentTablo = contentForCorrectValue
    }

    return (
        <div className={ 'tabloMain' }>
            <h1>{ contentTablo }</h1>
        </div>
    );
};

export default Tablo;