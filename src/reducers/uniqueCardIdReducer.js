const initialState = {
  uniqueCartId: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "UNIQUE_CART_ID":
      return {
        ...state,
        uniqueCartId: action.payload
      };
    default:
      return state;
  }
};
