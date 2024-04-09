import {useSelector} from 'react-redux';
import ItemList from './ItemList';
import {useDispatch} from 'react-redux';
import { clearCart } from './utils/cartSlice';
import { Link } from 'react-router-dom';


const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items)
    // console.log(cartItems);
   const  dispatch = useDispatch(clearCart);
    const handleClearCart= ()=>{
   
        dispatch(clearCart())
       
    }
    return <div className='cartItems w-9/12 m-auto'>
        {
            cartItems.length ===0 && <p>Your Cart is empty, please add some food items to your cart</p>
        }
        <ItemList items={cartItems}></ItemList>
        {
            cartItems.length != 0 && <button className='text-white m-2 p-2  bg-black rounded-sm' onClick={()=>{handleClearCart()}}>Clear Cart</button>
        }
    
        {
            cartItems.length === 0 &&<Link to={'/'} > <button className='text-white m-2 p-2  bg-black rounded-sm'>Back to main page</button></Link>
        }
    </div>
}

export default Cart;