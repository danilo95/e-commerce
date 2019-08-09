const initialState = {
  shipping: [],
  prices: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_SHIPPING":
      return {
        ...state,
        shipping: action.payload
      };
    case "GET_SHIPPING_PRICES":
      return {
        ...state,
        prices: action.payload
      };
    default:
      return state;
  }
};
