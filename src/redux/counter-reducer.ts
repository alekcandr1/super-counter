import { AppRootStoreType, AppThunk } from './store';

export type StateType = {
    maxValue: number,
    startValue: number,
    currentValue: number,
    error: boolean,
    errorText: string,
    settingText: string
}
const initialState: StateType = {
    maxValue: 5,
    startValue: 1,
    currentValue: 1,
    error: false,
    errorText: 'Недопустимое значение',
    settingText: 'Введите значения'
}

export const CounterReducer = ( state: StateType = initialState, action: ActionsType ): StateType => {
    switch (action.type) {
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'INC-CURRENT-VALUE':
            return {...state, currentValue: state.currentValue + 1}
        case 'SET-CURRENT-VALUE':
            return {...state, currentValue: action.currentValue}
        case 'SET-START-VALUE':
            return {...state, startValue: action.startValue}
        case 'SET-ERROR':
            return {...state, error: action.error}
        case 'RESET-CURRENT-VALUE':
            return {...state, currentValue: state.startValue}
        default:
            return state
    }
}

// actions
export const incCurrentValueAC = () =>
    ({type: 'INC-CURRENT-VALUE'} as const)
export const resetCurrentValueAC = () =>
    ({type: 'RESET-CURRENT-VALUE'} as const)
export const setCurrentValueAC = (currentValue: number) =>
    ({type: 'SET-CURRENT-VALUE', currentValue} as const)
export const setMaxValueAC = ( maxValue: number ) =>
    ({type: 'SET-MAX-VALUE', maxValue: maxValue} as const)
export const setStartValueAC = ( startValue: number ) =>
    ({type: 'SET-START-VALUE', startValue: startValue} as const)
export const setErrorAC = ( error: boolean ) =>
    ({type: 'SET-ERROR', error: error} as const)


//thunks
// export const incCurrentValueTC = (): AppThunk => (dispatch, getState) => {
//     dispatch(incCurrentValueAC())
//     let currentValue = getState().counter.currentValue
//     localStorage.setItem('count', JSON.stringify(currentValue))
// }
// export const getCurrentValueTC = (): AppThunk => dispatch => {
//
//     const strValue = localStorage.getItem('count')
//     strValue && dispatch(setCurrentValueAC(JSON.parse(strValue)))
// }
//
// export const resetCurrentValueTC = (): AppThunk => (dispatch, getState) => {
//     let startValue = getState().counter.startValue
//     dispatch(setCurrentValueAC(startValue))
//     localStorage.setItem('count', JSON.stringify(startValue))
// }

// types
export type ActionsType =
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof incCurrentValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof resetCurrentValueAC>
    | ReturnType<typeof setCurrentValueAC>