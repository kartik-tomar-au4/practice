const INITIAL_STATE = {
    menuList: []
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_MENU':
            return{
                ...state,
                menuList: action.payload
            };
        default:
            return state;    
    }
}

export default menuReducer;