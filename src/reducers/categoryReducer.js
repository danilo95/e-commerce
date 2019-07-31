const initialState = {
  category: [],
  
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORY_LIST":
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
};
