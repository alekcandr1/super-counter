import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { ActionsType, CounterReducer } from './counter-reducer';
import { thunk, ThunkAction, ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { loadState, saveState } from '../utils/localstorage-utils';

const RootReducer = combineReducers({
    counter: CounterReducer
})

export const store = legacy_createStore(RootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppRootStoreType = ReturnType<typeof RootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()

export type AppThunkType = ActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStoreType, unknown, AppThunkType>

export default store