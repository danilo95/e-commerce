const initialState = {
  new_Product: [],
  tax: 0,
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
        items: action.payload.length,
        tax: 8.5
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
      let newarray = state.cart.filter(item => {
        if (item.item_id !== parseInt(action.payload)) {
          return item;
        }
      });
      let newtotal = newarray.reduce((a, b) => {
        return parseFloat(a.subtotal) + parseFloat(b.subtotal);
      });

      return {
        ...state,
        deleteItem: action.payload,
        items: action.payload.length,
        total: newtotal,
        cart: newarray
      };
    case "CLEAR_CART":
      return {
        ...state,
        new_Product: action.payload,
        items: action.payload.length,
        total: action.payload,
        cart: action.payload,
        deleteItem: action.payload,
        tax: 0
      };
    default:
      return state;
  }
};
