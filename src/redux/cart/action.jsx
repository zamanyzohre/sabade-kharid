import { ADDTO_CART, INCREMENT,DECREMENT,REMOVE, CLEAR_CART } from "./actionType";

export function addToCArt(product) {
  
  return {
    type: ADDTO_CART,
    payload: product,
  };
}
export function increment(product) {
  
  return {
    type: INCREMENT,
    payload: product,
  };
}
export function decrement(product) {
  
  return {
    type: DECREMENT,
    payload: product,
  };
}
export function remove(product) {
  
  return {
    type: REMOVE,
    payload: product,
  };
}
export function clearCart(product) {
  
  return {
    type: CLEAR_CART,
    
  };
}
 