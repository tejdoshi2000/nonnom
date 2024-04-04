import { MdStars, MdOutlineShoppingBag } from "react-icons/md";
import { CDN_URL } from "./utils/constant";


const RestaurantCard = (props) =>{
    const {resData} = props
    // console.log(resData)
    return <div className="res-card m-4  w-[250px] h-[350px] flex flex-col bg-gray-100 text-sm rounded-md">
   
   
    <img className="res-sample w-full h-3/5 rounded-lg " src={ CDN_URL + resData.info.cloudinaryImageId}></img>
      <label className="absolute shadow-inner bg-black bg-opacity-30 text-xl rounded-md mt-0.1 text-white font-bold">{resData?.info?.aggregatedDiscountInfoV3?.header} {resData?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
  
    
      <div className="cardInfo">
      <h3 className="px-2 font-semibold">{resData.info.name}</h3>
      <div className="ratingEta flex flex-row px-2">
      
        <MdStars className="fill-green-500"/>
      <h4>{resData.info.avgRating}</h4>
      <p>•</p>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
      <p>•</p>
      <p>{resData.info.sla.lastMileTravelString}</p>

      </div>

      <p className="break-words px-2">{resData.info.cuisines.join(',')}</p>
      <p className="px-2">{resData.info.areaName}</p>
     
     
    
      {/* {console.log(resData)} */}
      </div>
    </div>
  }
  

 

  export const WithDiscount = (RestaurantCard) => {
    // Define your HOC component
    const WithDiscountComponent = (props) => {
      return (
        <div className="relative">
          {/* <label className="absolute bottom-2 text-white bg-transparent ml-4 pr-1 rounded-sm">Top Rated Restaurant</label> */}
          {/* Pass the props down to the wrapped component */}
          <RestaurantCard {...props} />
          
        </div>
      );
    };
  
    return WithDiscountComponent;
  };

  export default RestaurantCard;