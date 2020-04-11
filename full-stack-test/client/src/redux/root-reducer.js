import { combineReducers } from "redux";

import sellReducer from "./sell-page/sell-page.reducer";
import productReducer from "./products/products.reducer";

// import tableReducer from './table-list/table-reducer';
// import waiterReducer from './waiter-list/waiter-reducer';
// import menuReducer from './menu-list/menu-reducer'

export const rootReducer = combineReducers({
  sellReducer: sellReducer,
  productReducer: productReducer,
});
