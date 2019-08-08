import BackendApi from "./BackendApi";

export const allProducts = () => {
  let result = BackendApi.get("/products")
    .then(response => {
      return response.data.rows;
    })
    .catch(error => {
      return handleError(error.message);
    });

  return result;
};

export const SearchProducts = itemToSearch => {
  let result = BackendApi.get(`/products/search?query_string=${itemToSearch}`)
    .then(response => {
      return response.data.rows;
    })
    .catch(error => {
      return handleError(error.message);
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


export const getUniqueIdCart =()=> {
  let result = BackendApi.get(`/shoppingcart/generateUniqueId`)
    .then(response => {
      return response.data.cart_id;
    })
    .catch(error => {
      return [];
    });

  return result;
};

export const addToCart =(id,product,quantity)=> {
  let result = BackendApi.post(`/shoppingcart/add`, {
    cart_id: id,
    product_id: product,
    attributes: quantity
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return [];
    });

  return result;
};

export const GetCartList =(id)=> {
  let result = BackendApi.get(`/shoppingcart/${id}`)
    .then(response => {
     
      return response.data;
    })
    .catch(error => {
      return [];
    });

  return result;
};

export const GetTotalToPay =(id)=> {
  let result = BackendApi.get(`/shoppingcart/totalAmount/${id}`)
    .then(response => {
      return response.data.total_amount;
    })
    .catch(error => {
      return null;
    });

  return result;
};






const handleError = errorHttp => {
  switch (errorHttp) {
    case "Network Error":
      return 500;
    default:
      return 404;
  }
};
