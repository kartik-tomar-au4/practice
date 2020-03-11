import { combineReducers } from 'redux';

import shopReducer from './shop-data/shop-reducer';
import listReducer from './shop-list/list-reducer';

export const rootReducer = combineReducers({
    shopData: shopReducer,
    shopList: listReducer
})