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

type SetMaxValue = ReturnType<typeof setMaxValueAC>
type SetCurrenValue = ReturnType<typeof setCurrentValueAC>
type SetStartValue = ReturnType<typeof setStartValueAC>
type SetError = ReturnType<typeof setErrorAC>

export type ActionsType =
    | SetMaxValue
    | SetCurrenValue
    | SetStartValue
    | SetError

export const CounterReducer = ( state: StateType = initialState, action: ActionsType ): StateType => {
    switch (action.type) {
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET-CURRENT-VALUE':
            return {...state, currentValue: action.currentValue}
        case 'SET-START-VALUE':
            return {...state, startValue: action.startValue}
        case 'SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setMaxValueAC = ( maxValue: number ) => {
    return {type: 'SET-MAX-VALUE', maxValue: maxValue} as const
}
export const setCurrentValueAC = ( currentValue: number ) => {
    return {type: 'SET-CURRENT-VALUE', currentValue: currentValue} as const
}
export const setStartValueAC = ( startValue: number ) => {
    return {type: 'SET-START-VALUE', startValue: startValue} as const
}
export const setErrorAC = ( error: boolean) => {
    return {type: 'SET-ERROR', error: error} as const
}
