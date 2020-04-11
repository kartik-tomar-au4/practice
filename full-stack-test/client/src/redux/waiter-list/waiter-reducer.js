const INITIAL_STATE = {
    waiterList: []
}

const waiterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_WAITER':
            return{
                ...state,
                waiterList: action.payload
            };
        default:
            return state;    
    }
}

export default waiterReducer;