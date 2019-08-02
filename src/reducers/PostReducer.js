const initialState = {
  posts: [],
  postError: false,
  postLoading: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST":
      return {
        ...state,
        posts: action.payload,
        postError: true,
        postLoading: false
      };
    case "ERROR_FETCH_POST":
      return {
        ...state,
        postError: action.payload
      };
    case "IS_LOADING":
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
