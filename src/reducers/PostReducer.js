const initialState = {
  posts: [],
  filteredItems: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "fetchPost":
      return {
        ...state,
        posts: action.payload
      };
    case "SEARCH_ITEM":
      return {
        ...state,
        posts: action.payload
      };
     
    default:
      return state;
  }
};
