import { useState, useEffect } from "react"
import { MENU_API } from "./constant";

const useRestaurantMenu = (resID) =>{
    const[resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(MENU_API + resID);
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo;

};
export default useRestaurantMenu;