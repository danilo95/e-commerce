import { allProducts } from "../api/Request";
import { SearchProducts } from "../api/Request";
import { categories } from "../api/Request";
import { productByCategory } from "../api/Request";
import { productDetailById } from "../api/Request";
import { reviewslById } from "../api/Request";

export const fetchPost = () => async dispatch => {
  const response = await allProducts();
  dispatch({ type: "fetchPost", payload: response });
};

export const SearchItem = value => async dispatch => {
  const response = await SearchProducts(value);
  dispatch({ type: "SEARCH_ITEM", payload: response });
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
