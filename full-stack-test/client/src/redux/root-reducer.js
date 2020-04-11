import { combineReducers } from 'redux';

import tableReducer from './table-list/table-reducer';
import waiterReducer from './waiter-list/waiter-reducer';
import menuReducer from './menu-list/menu-reducer'

export const rootReducer = combineReducers({
    tableReducer: tableReducer,
    waiterReducer: waiterReducer,
    menuReducer: menuReducer
})