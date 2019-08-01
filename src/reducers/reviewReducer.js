const initialState = {
  review: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "REVIEWS":
      return {
        ...state,
        review: action.payload
      };
    default:
      return state;
  }
};
