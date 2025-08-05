import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {addToCArt,increment } from '../redux/cart/action'
import {setProduct} from '../redux/products/action'
import Swal from 'sweetalert2'

function Products() {
  const { products} = useSelector(state =>state.product)
  const { cart } =useSelector(state=>state.shopping)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(setProduct())
  },[])

  function handleAddToCart(product){
    dispatch(addToCArt(product))
    
    Swal.fire({
      title: "محصول به سبد خرید اضافه شد",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar:true,
      position: "top",
      icon: "success",
      toast:true
    });
  }
  console.log(cart);
  
  return (
    <>
    <div className="row g-2">
    {products && products.map(product=>
      ( <div className="col-md-3" key={product.id}>
       <div className="card" >
         <img src={product.image} className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">{product.name}</h5>
           <p className="card-text">{product.description}</p>
         </div>
         <div className="card-footer">
           <small className="text-body-secondary d-flex justify-content-between align-items-center">
            <button onClick={()=>handleAddToCart(product)} className="btn btn-sm btn-outline-success">Add to cart</button>
            <span>{product.price}</span>
           </small>
         </div>
       </div>
     </div>)
    )}
   </div>
    <br />
    <br />
   </>
  )
}

export default Products