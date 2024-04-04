
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";




const RestaurantMenu = () =>{


  // const [resInfo, setResInfo] = useState(null);   
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  // const dummyVar = resInfo.data.cards.length
  // console.log(resInfo)
  // console.log(resInfo?.data?.cards[2]?.card?.card?.info?.name)
  // console.log(resInfo?.data?.cards[2]?.card?.card?.info?.cuisines)
  // console.log(resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage)
  // console.log(resInfo?.data?.cards[2]?.card?.card?.info.areaName)
  // console.log( resInfo?.data?.cards[resInfo.data.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards) 
 
  const itemCards = resInfo?.data?.cards[resInfo.data.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  // console.log(resInfo)  
  // console.log(resInfo?.data?.cards[resInfo.data.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories = resInfo?.data?.cards[resInfo.data.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>(
    c.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  )
  )
  // console.log(categories)
  // const filteredItemsArrays = itemCategoryFilter.map((c)=>(c.card.card.itemCards))
  // console.log(filteredItemsArrays)
  // const flattenedItems = [].concat(...itemCategoryFilter.map((c)=>(c.card.card.itemCards))) 
  // console.log(flattenedItems)


  

  if(resInfo === null){
    return <Shimmer/>
  }

  // resInfo?.data?.cards[2]?.card?.card?.itemCards[0].card.info
    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info
    
    
    // console.log( resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  return(
    <div className="menu w-9/12  m-auto">
      <div className="text-center  ">
      <h2 className="font-bold m-3">{name}</h2>
      <p>{cuisines.join(', ')} - {costForTwoMessage} </p>
      <p>{resInfo?.data?.cards[resInfo.data.cards.length]?.card?.card?.info.locality}</p>
      <h4>Menu</h4>
      {/* We will buid an accordian for each category from here */}
      {
        
        categories.map((category, index) => 
        // controlled component   
        <RestaurantCategory key={category.card.card.type} showItems ={index === showIndex ? true : false} setShowIndex = {() => setShowIndex(index)} data = {category?.card?.card}/>
        )
      }
    
      
   
      
        {/* {itemCards.map((info)=>{
          const mainInfo = info.card.info
          return <div className="itemCard" key={mainInfo.id}>
            <img className="itemImage" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${mainInfo?.imageId}`}></img>
            <div className="itemInfo"> <p>{mainInfo?.name}-{mainInfo?.defaultPrice/100 || mainInfo?.price/100}₹</p>
            <p>{mainInfo?.description}</p>
            <p>{mainInfo?.itemAttribute?.vegClassifier}</p>
            
             </div>
          
          </div>
          
          
        })} */}
     
      </div>
    </div>
  )
}

export default RestaurantMenu;