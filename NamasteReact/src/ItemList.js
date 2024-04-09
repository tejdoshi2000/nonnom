import Item from "./Item";
import { MdStar } from "react-icons/md";
import ShowMoreText from 'react-show-more-text';
import {useDispatch} from 'react-redux';
import { addItems } from "./utils/cartSlice";



const ItemList = ({items}) =>{
    // console.log(items)
    
const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        console.log('Item added to cart.')
        //dispatching the action
        dispatch(addItems(item));

    }

    return   <div>
    {
    items.map((item)=>{ 
        return  <div key={item.card.info.id} className="   text-left">
        {/* {console.log(item)} */}
        <div className="flex justify-between">
         <div className="py-2 w-3/4">
             <span className=" text-left text-gray-800 text-sm font-bold">{item.card.info.name}</span>
             {item.card.info.itemAttribute.vegClassifier === 'VEG' ? <span className="text-green-500 test-sm"> (VEGETARIAN 🥬)</span> : <span className="text-red-500 text-sm "> (NON-VEGETARIAN 🍖)</span>}
             <br/>
             <span className="self-start mx-1 text-[0.8rem] font-bold text-gray-600">₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
             <br/>
             {item.card.info.offerTags &&  <span className="text-xs text-blue-600">{item.card.info.offerTags[0].title}-{item.card.info.offerTags[0].subTitle}<br/></span>}
             
            
             {item.card.info.ratings.aggregatedRating.rating ?  <span className="flex flex-row text-[0.8rem]"><MdStar className="fill-green-800 mt-1"/> <span className="font-bold text-green-800 text-xs mt-0.5"> {item.card.info.ratings.aggregatedRating?.rating}</span><span>({item.card.info?.ratings?.aggregatedRating?.ratingCountV2})</span></span> : <span className="text-orange-500">Recently Launched</span> }
            <ShowMoreText className=" text-xs text-left text-gray-500" lines={1} more="more" less= 'less' anchorClass="show-more-link font-bold" expanded={false}>{item.card.info.description} </ShowMoreText>
             {/* <p className=" text-xs text-left text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap ">{item.card.info.description} </p> */}
           
         </div>
         <div className="1/4 m-auto p-auto relative">
            
        <img  className = ' m-1 p-1 w-28 h-28 rounded-xl'alt="Unable to fetch the image from server." src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`} ></img>
        
                <button className="absolute bottom-0 font-bold  p-1 left-1/2 bg-white text-orange-500 rounded-lg" onClick={() =>handleAddItem(item)}>ADD+</button>
        
        </div>
         </div>
       <div className="border-b-2 border-black-100"></div>
     </div>
    })
    }
    
</div>
   
}

export default ItemList;