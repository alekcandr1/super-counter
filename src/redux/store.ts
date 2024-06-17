import { combineReducers, legacy_createStore } from 'redux';
import { CounterReducer } from './counter-reducer';

const RootReducer = combineReducers({
    counter: CounterReducer
})

export const store = legacy_createStore(RootReducer)

export type AppRootStoreType = ReturnType<typeof RootReducer>

export default store