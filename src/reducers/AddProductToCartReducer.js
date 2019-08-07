const initialState = {
  new_Product: [],
  cart:[]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT_TO_THE_CART":
      return {
        ...state,
        new_Product: action.payload
      };
    case "GET_PRODUCTS_OF_CART":
      return {
        ...state,
        cart: action.payload
      };

    default:
      return state;
  }
};
