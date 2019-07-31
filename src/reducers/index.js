import {combineReducers} from 'redux';
import PostReducer from './PostReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  posts: PostReducer,
  category: categoryReducer
});