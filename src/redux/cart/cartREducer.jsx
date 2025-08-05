import { ADDTO_CART,INCREMENT,DECREMENT,REMOVE,CLEAR_CART } from './actionType'


const setLocalStorage = (item) =>{
    localStorage.setItem('cart' , JSON.stringify(item))
}

const initialState ={
    cart:localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

function cartREducer(state=initialState,action) {
 switch(action.type){

    case ADDTO_CART:
        const hasProduct = state.cart.find(p =>p.id === action.payload.id) ? true : false
        // false =>[...state.cart,{...action.payload,qty:1}] 
        // true => state.cart.map(p => p.id === action.payload.id ? {...p,qty:p.qty + 1} : p )       
        state.cart = hasProduct ? state.cart.map(p => p.id === action.payload.id ? {...p,qty:p.qty + 1} : p) : [...state.cart,{...action.payload,qty:1}]

        setLocalStorage(state.cart)

        return {
            ...state,
            cart:state.cart
        }

        case INCREMENT:
            state.cart = state.cart.map(p => p.id === action.payload ? {...p,qty:p.qty + 1} : p)

        setLocalStorage(state.cart)

            return{
                cart:state.cart 
            }

        case DECREMENT:
            const product =state.cart.find(p =>p.id === action.payload)
            state.cart =product.qty>1 ? state.cart.map(p => p.id === action.payload ? {...p,qty:p.qty - 1} : p) : state.cart

        setLocalStorage(state.cart)

            return{
                cart:state.cart 
            }

        case REMOVE:
            state.cart =state.cart.filter(p =>p.id !== action.payload)

        setLocalStorage(state.cart)

            return{
                ...state,
                cart:state.cart 
            }

        case  CLEAR_CART:
        setLocalStorage([])

            return{
                
                cart:[] 
            }
        default:
            return{
                ...state
            }
 }
}

export default cartREducer