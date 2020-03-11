const INITIAL_STATE = {
    shopList: []
}

const listReducer =(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_SHOP':
            return{
                ...state,
                shopList: [...state.shopList, action.payload]
            };
        default:
            return state;    
    }
}

export default listReducer;