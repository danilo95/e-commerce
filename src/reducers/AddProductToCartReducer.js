const initialState = {
  new_Product: [],
  message:"",
  alert: "The cart is empty, buy a t-shirt :(",
  tax: 0,
  items:0,
  cart:[],
  total:0,
  deleteItem: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT_TO_THE_CART":
      return {
        ...state,
        new_Product: action.payload,
        items: action.payload.length,
        tax: 8.50,
        message: "Item added",
        alert: " "
      };
    case "GET_PRODUCTS_OF_CART":
      return {
        ...state,
        cart: action.payload,
        items: action.payload.length
      };
      case "GET_TOTAL":
      return {
        ...state,
        total: action.payload
      };
      case "DELETE_ITEM":
      return {
        ...state,
        deleteItem: action.payload,
        items: action.payload.length,
        total: action.payload,
        cart: action.payload
      };
      case "CLEAR_CART":
      return {
        ...state,
        new_Product: action.payload,
        items: action.payload.length,
        total: action.payload,
        cart: action.payload,
        deleteItem: action.payload,
        alert: "The cart is empty, buy a t-shirt :(",
        tax:0
      };
    default:
      return state;
  }
};
