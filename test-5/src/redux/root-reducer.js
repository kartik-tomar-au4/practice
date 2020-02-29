import { combineReducers } from 'redux';

import listReducer from './todo-list/list-reducer';
import inputReducer from './input/input-reducer';

export const rootReducer = combineReducers({
    list: listReducer,
    inputField: inputReducer
})