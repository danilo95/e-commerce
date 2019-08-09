const initialState = {
  new_Product: [],
  items: 0,
  cart: [],
  total: 0,
  deleteItem: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT_TO_THE_CART":
      return {
        ...state,
        new_Product: action.payload,
        items: action.payload.length
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
      let newtotal = 0;
      let newarray = state.cart.filter(item => {
        if (item.item_id !== parseInt(action.payload)) {
          newtotal = parseFloat(newtotal) + parseFloat(item.subtotal);
          return item;
        }
      });
      return {
        ...state,
        deleteItem: action.payload,
        items: newarray.length,
        total: newtotal,
        cart: newarray
      };
    case "CLEAR_CART":
      return {
        ...state,
        new_Product: action.payload,
        items: action.payload.length,
        total: 0,
        cart: action.payload,
        deleteItem: action.payload
      };
    default:
      return state;
  }
};
