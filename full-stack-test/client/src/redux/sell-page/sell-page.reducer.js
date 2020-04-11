const INITIAL_STATE = {
  categories: [],
  cities: [],
};

const sellReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "ADD_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};

export default sellReducer;
