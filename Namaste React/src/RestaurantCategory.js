import React, { useState } from "react";
import RestaurantMenu from "./RestaurantMenu";
import ItemCard from "./ItemCard";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(false)
    const handleClick = () =>{
        // console.log('Header Clicked');
       setShowIndex()
    
    }



return <div>
    

 {/* { console.log(data)} */}




{/* accordian header */}
 <div className="flex flex-col mx-auto my-4 cursor-pointer" >
    <span className="font-bold flex justify-between bg-gray-100 rounded-md h-10 p-2" onClick={handleClick}><span>{data.title}({data.itemCards.length})</span> 🔽</span>
    <div className="flex flex-col">
  {showItems && <ItemList items = {data.itemCards}/>} 
    </div>
    
 </div>
{/* <h1 className="red font-bold">Dummy data</h1> */}
 {/* Accordian Body */}


 

{/* <p>{props.card.card.title}</p> */}


    </div>
 

}

export default RestaurantCategory;