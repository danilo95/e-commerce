const initialState = {
  new_Product: [],
  items: 0,
  cart: [],
  total: 0,
  postLoading: false,
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
        items: action.payload.length,
        postLoading: false
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
    case "IS_LOADING":
      return {
        ...state,
        postLoading: action.payload
      };
    case "UPDATE_QUANTITY":
      let total = 0;
      action.payload.map(item => {
        const oldItemValue = state.cart.find(cartitem => cartitem.item_id === item.item_id);
        item.image = oldItemValue.image;
        return (total = parseInt(item.subtotal) + total);
      });
      return {
        ...state,
        cart: action.payload,
        items: action.payload.length,
        total: total
      };
    default:
      return state;
  }
};
