import BackendApi from "./BackendApi";
import { variableDeclaration } from "@babel/types";

export const allProducts = () => {
  let result = BackendApi.get("/products")
    .then((response)=>{
      return response.data.rows;
    })
    .catch(function(error) {
      return [];
    });

  return result;
};

export const SearchProducts = itemToSearch => {
  let result = BackendApi.get(`/products/search?query_string=${itemToSearch}`)
    .then((response)=> {
      return response.data.rows;
    })
    .catch(function(error) {
      return [];
    });

  return result;
};

export const productById = id => {
  let result = BackendApi.get(`/products/${id}/details`)
    .then((response)=> {
      return response.data.rows;
    })
    .catch(function(error) {
      return [];
    });

  return result;
};


export const  productDetail = async (id)=>{

  const promise1 = BackendApi.get(`/products/${id}/details`);
  const promise2 = BackendApi.get(`/products/${id}/reviews`);
  
 return await Promise.all([promise1, promise2]).then(values=> {
  return values;
  })

}



