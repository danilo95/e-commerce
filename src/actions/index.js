import {
  allProducts,
  SearchProducts,
  categories,
  productByCategory,
  productDetailById,
  reviewslById,
  getUniqueIdCart,
  addToCart
} from "../api/Request";

export const fetchPost = () => async dispatch => {
  const response = await allProducts();
  if (response) {
    dispatch({ type: "FETCH_POST", payload: response });
  } else {
    dispatch({ type: "ERROR_FETCH_POST", payload: response });
  }
};

export const loadingPost = () => {
  return { type: "IS_LOADING", payload: true };
};

export const SearchItem = value => async dispatch => {
  const response = await SearchProducts(value);
  if (response) {
    dispatch({ type: "SEARCH_ITEM", payload: response });
  } else {
    dispatch({ type: "ERROR_FETCH_POST", payload: response });
  }
};

export const categorieList = () => async dispatch => {
  const response = await categories();
  dispatch({ type: "CATEGORY_LIST", payload: response });
};

export const searchProductByCategorie = id => async dispatch => {
  const response = await productByCategory(id);
  dispatch({ type: "SEARCH_BY_CATEGORY", payload: response });
};

export const singleProductDetail = id => async dispatch => {
  const response = await productDetailById(id);
  dispatch({ type: "SINGLE_PRODUCT", payload: response });
};

export const getReviewslById = id => async dispatch => {
  const response = await reviewslById(id);
  dispatch({ type: "REVIEWS", payload: response });
};

export const getUniqueCartId =()=> async dispatch => {
  const response = await getUniqueIdCart();
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify(response));
  }
  dispatch({ type: "UNIQUE_CART_ID", payload: response });
};


export const addNewProductToTheCart =(id,product,quantity)=> async dispatch => {
  const response = await addToCart(id,product,quantity);
  dispatch({ type: "ADD_NEW_PRODUCT_TO_THE_CART", payload: response });
};