const INITIAL_STATE = {
    task: '',
    option: 'Kartik'
}

const inputReducer =(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TASK':
            return{
                ...state,
                task: action.payload
            };
        case 'OPTION':
            return{
                ...state,
                option: action.payload
            };
        default:
            return state;    
    }
}

export default inputReducer;