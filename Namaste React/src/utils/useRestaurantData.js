import { useState, useEffect } from "react";
import { RESTAURANT_API } from "./constant";
const useRestaurantData = ()=>{
    const [RestaurantData, setRestaurantData] = useState([]);
    useEffect(()=>{
        fetchData();
       }, []);
       
       const fetchData = async ()=> {
        const data = await fetch(RESTAURANT_API);
      
        const json = await data.json();
        console.log(json);
        
        setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       }

       return RestaurantData;
}

export default useRestaurantData;