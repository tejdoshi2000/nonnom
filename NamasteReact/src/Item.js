import { MdStar } from "react-icons/md";
const Item = (item) =>{
    return <div className="flex flex-row justify-between rounded-md m-3 bg-slate-300 w-6/7 h-[200px]">
       {/* {console.log(item)} */}
        <div className="forInfo flex flex-col w-3/5">
            <span className="font-bold text-[0.8rem] self-start  ">{item.item.card.info.name}</span>
            <span className="self-start mx-1 text-[0.8rem]">₹{item.item.card.info.price/100 || item.item.card.info.defaultPrice/100}</span>
            <span className="flex flex-row text-[0.8rem]"><MdStar className="fill-green-500 mt-1"/> <span className="font-bold text-green-600 text-xs mt-0.5"> {item.item.card.info.ratings.aggregatedRating?.rating}</span><span>({item.item.card.info?.ratings?.aggregatedRating?.ratingCountV2})</span></span>
            <span className="text-[2vh] text-left ">{item.item.card.info.description}</span>
          
        </div>
        <div className="forImage flex  justify-center content-center flex-col w-1/3 h-full">
            <img  className = 'bg-white w-2/3 self-center h-2/3 my-auto rounded-lg'alt="Unable to fetch the image from server." src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.item.card.info.imageId}`} ></img>

        </div>
        
    </div>
}

export default Item;


// This is an Item{(item.item.card.info.name)}