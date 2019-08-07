const initialState = {
  new_Product: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT_TO_THE_CART":
      return {
        ...state,
        new_Product: action.payload
      };
    default:
      return state;
  }
};
