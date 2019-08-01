const initialState = {
  singlePost: [],
  
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "SINGLE_PRODUCT":
      return {
        ...state,
        singlePost: action.payload
      };
    default:
      return state;
  }
};
