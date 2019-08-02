const initialState = {
  posts: [],
  postError: false,
  postLoading:false
};
export default (state = initialState, action) => { 
  switch (action.type) {
    case "fetchPost":
      return {
        ...state,
        posts: action.payload,
        postError: true,
        postLoading:false
      };    
      case "errorFetchPost": 
      return {
        ...state,
        postError: action.payload
      };
      case "isLoading": 
      return {
        ...state,
        postLoading: action.payload
      };
    case "SEARCH_ITEM":
      return {
        ...state,
        posts: action.payload
      };
    case "SEARCH_BY_CATEGORY":
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
