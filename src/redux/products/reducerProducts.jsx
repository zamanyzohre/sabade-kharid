import { SET_PRODUCTS } from "./actiontype"

const initialState = {
    products:[]
}

 const reducerProducts = (state=initialState,action) => {
   
      switch(action.type) {
          case SET_PRODUCTS:
           return { 
            ...state,
            products:action.payload
           }   
         default:
            return state
      }
  }

  export default reducerProducts