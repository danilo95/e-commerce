import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import categoryReducer from "./categoryReducer";
import singlePostReducer from "./singleProductReducer";
import reviewReducer from "./reviewReducer";
export default combineReducers({
  posts: PostReducer,
  category: categoryReducer,
  singlePost: singlePostReducer,
  review: reviewReducer
});
