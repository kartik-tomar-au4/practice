const INITIAL_STATE = {
    tableList: []
}

const tableReducer =(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TABLE':
            return{
                ...state,
                tableList: action.payload
            };
        default:
            return state;    
    }
}

export default tableReducer;