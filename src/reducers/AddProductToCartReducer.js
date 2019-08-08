const initialState = {
  new_Product: [],
  cart:[],
  total:0
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
      case "GET_TOTAL":
      return {
        ...state,
        total: action.payload
      };
    default:
      return state;
  }
};
