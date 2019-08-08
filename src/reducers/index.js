import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import categoryReducer from "./categoryReducer";
import singlePostReducer from "./singleProductReducer";
import reviewReducer from "./reviewReducer";
import uniqueCartIdReducer from "./uniqueCardIdReducer";
import addProductToCartReducer from "./AddProductToCartReducer";
import shippingReducer from "./ShippingReducer";
export default combineReducers({
  posts: PostReducer,
  category: categoryReducer,
  singlePost: singlePostReducer,
  review: reviewReducer,
  uniqueCartId: uniqueCartIdReducer,
  cart: addProductToCartReducer,
  shipping: shippingReducer
});
