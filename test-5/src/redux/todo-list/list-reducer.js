const INITIAL_STATE = {
    todoList: [
        'hello',
        'how',
        'are',
        'you'
    ]
}

const listReducer =(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return{
                ...state,
                todoList: [...state.todoList, action.payload]
            };
        default:
            return state;    
    }
}

export default listReducer;