import BackendApi from "./BackendApi";

export const allProducts = () => {
  let result = BackendApi.get("/products")
    .then(response => {
      return response.data.rows;
    })
    .catch(error => {
      return [];
    });

  return result;
};

export const SearchProducts = itemToSearch => {
  let result = BackendApi.get(`/products/search?query_string=${itemToSearch}`)
    .then(response => {
      return response.data.rows;
    })
    .catch(error => {
      return [];
    });

  return result;
};

export const categories = () => {
  let result = BackendApi.get(`/categories`)
    .then(response => {
      return response.data.rows;
    })
    .catch(error => {
      return null;
    });

  return result;
};

export const productByCategory = id => {
  let result = BackendApi.get(`/products/inCategory/${id}`)
    .then(response => {
      return response.data.rows;
    })
    .catch(error => {
      return [];
    });

  return result;
};

export const productDetailById = id => {
  let result = BackendApi.get(`/products/${id}/details`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return [];
    });

  return result;
};

export const reviewslById = id => {
  let result = BackendApi.get(`/products/${id}/reviews`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return [];
    });

  return result;
};


const handleError = (errorHttp) => {

}