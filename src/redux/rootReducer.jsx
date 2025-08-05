import cartREducer from "./cart/cartREducer";
import  reducerProducts from "./products/reducerProducts";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    product:reducerProducts,
    shopping:cartREducer
})

export default rootReducer