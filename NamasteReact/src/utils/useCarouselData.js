import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constant";

const useCarouselData = () =>{
    const [ListOfCard, setCard] = useState([]);

    useEffect(()=>{
        fetchCarousel();
       }, []);

       const fetchCarousel = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
       
        // console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
        setCard(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        
      }
      return ListOfCard;
    
}

export default useCarouselData;