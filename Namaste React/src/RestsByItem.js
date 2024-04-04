import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useParams } from "react-router-dom";

const RestsByItem = () =>{


    const [ResList, setResList] = useState([]);
    
    
    useEffect(()=>{
        console.log("useEffect Called")
        fetchResList();
    },[])

    const fetchResList = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json =  await data.json();
        console.log(json);
        // const rests = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(json);
        
    }
console.log(ResList)
    const results = ResList.filter((rests)=>{
        return rests.info.cuisines.includes('Pizzas');
    });
   
    console.log(results);
   
    return <div className="res-container">
        {
            results.map((rest)=>{
                return <RestaurantCard resData = {rest} key = {rest.info.id} ></RestaurantCard>
            })
        }
       
    </div>
   
}

export default RestsByItem;