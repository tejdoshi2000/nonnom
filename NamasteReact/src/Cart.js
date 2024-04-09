import {useSelector} from 'react-redux';
import ItemList from './ItemList';
import {useDispatch} from 'react-redux';
import { clearCart } from './utils/cartSlice';


const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items)
    // console.log(cartItems);
   const  dispatch = useDispatch(clearCart);
    const handleClearCart= ()=>{
   
        dispatch(clearCart())
       
    }
    return <div className='cartItems'>
        {
            cartItems.length ===0 && <p>You're Cart is empty, please add some food items to your cart</p>
        }
        <ItemList items={cartItems}></ItemList>
        <button className='text-white m-2 p-2  bg-black rounded-sm' onClick={()=>{handleClearCart()}}>Clear Cart</button>
    </div>
}

export default Cart;