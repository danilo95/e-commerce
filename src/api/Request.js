import BackendApi from "./BackendApi";
import { variableDeclaration } from "@babel/types";

export const allProducts = () => {
  let result = BackendApi.get("/products")
    .then(function(response) {
      return response.data.rows;
    })
    .catch(function(error) {
      return [];
    });

  return result;
};



export const SearchProducts = (itemToSearch) => {
  let result = BackendApi.get(`/products/search?query_string=${itemToSearch}`)
    .then(function(response) {
      return response.data.rows;
    })
    .catch(function(error) {
      return [];
    });

  return result;
};

