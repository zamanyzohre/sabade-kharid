import { useDispatch, useSelector } from "react-redux"
import { increment ,decrement,remove,clearCart} from '../redux/cart/action'
import Swal from 'sweetalert2'
import {NavLink} from 'react-router-dom'

function ShopingCart() {

  const { cart } = useSelector(state=>state.shopping)
  const  dispatch = useDispatch()
console.log(cart);

  function handleIncrement(productId){
     dispatch(increment(productId))

      Swal.fire({
           title: "به تعداد محصول اضافه شد",
           showConfirmButton: false,
           timer: 1500,
           timerProgressBar:true,
           position: "top",
           icon: "success",
           toast:true
         });
  }

  function handleDecrement(productId){
     dispatch(decrement(productId))

      Swal.fire({
           title: " از تعداد محصول کم شد",
           showConfirmButton: false,
           timer: 1500,
           timerProgressBar:true,
           position: "top",
           icon: "success",
           toast:true
         });
  }

  function handleRemove(productId){
     dispatch(remove(productId))

      Swal.fire({
           title: "محصول با موفقیت حذف شد",
           showConfirmButton: false,
           timer: 1500,
           timerProgressBar:true,
           position: "top",
           icon: "success",
           toast:true
         });
  }

  function handleClearCart(){
     dispatch(clearCart())

      Swal.fire({
           title: "سبد خرید شما خالی شد",
           showConfirmButton: false,
           timer: 1500,
           timerProgressBar:true,
           position: "top",
           icon: "warning",
           toast:true
         });
  }

  return (
    <>
        {cart.length === 0 ?
        <div className="text-center">
          <i className="bi-basket-fill" style={{fontSize:5+"rem"}}></i> 
          <h2 className="mb-4">Card Is Empty</h2>
          <NavLink to="/products" className="btn btn-outline-dark" >Product</NavLink>
        </div>
        :
         <table className="table table-hover align-middle ">
         <thead>
           <tr>
             <th scope="col" colSpan={3} >Product</th>
             <th scope="col">Price</th>
             <th scope="col">Quantity</th>
             <th scope="col" colSpan={2} >Subtotal</th>
             <th scope="col">Action</th>
           </tr>
         </thead>
         <tbody>
         {cart && cart.map(product =>(
           <tr key={product.id} className="text-center">
             <td className="d-flex align-items-center">
            
             <img src={product.image} alt="" className="img-fluid me-3" style={{width:'80px'}}/>
            <div className="text-start">
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            </div>
            
             </td>
             <td></td>
             <td></td>
             <td>{product.price}</td>
             <td> 
               <button onClick={()=>handleIncrement(product.id)} className="btn btn-dark btn-sm" >
                  +
                   </button>
               <span style={{marginLeft:'0.2rem',marginRight:'0.2rem'}}>{product.qty}</span>
               <button onClick={()=>handleDecrement(product.id)} className="btn btn-dark btn-sm" >
                  - 
                  </button>
             </td>
             <td colSpan={2} >{product.qty * product.price}</td>
             <td><button onClick={()=>handleRemove(product.id)} className="btn btn-danger btn-sm">Delete</button></td>
       
           </tr>
         ))}
         </tbody>
         <tfoot >
           <tr>
           <td colSpan={3}>
             <button onClick={()=>handleClearCart()} className="btn btn-dark btn-sm">
               Clear Cart
               </button>
               </td>
           <td></td>
           <td></td>
           <td colSpan={2}><strong>
             Total:{cart.reduce((total,product)=>{
                 return total+product.qty *product.price
             },0)}
             </strong></td>
           <td><button className="btn btn-success btn-sm ">Checkout</button></td>
           </tr>
         </tfoot>
       </table>
        } 
       
     
    
    </>
  )
}

export default ShopingCart