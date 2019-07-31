import { allProducts } from '../api/Request';
import { SearchProducts } from '../api/Request';

export const fetchPost= ()=>async dispatch=>{
const response = await allProducts();
dispatch({type:'fetchPost', payload:response})
};

export const SearchItem= (value)=>async dispatch=>{
  const response = await SearchProducts(value);
  dispatch({type:'SEARCH_ITEM', payload:response})
  };


  