import RestaurantCard from "./RestaurantCard";
import { WithDiscount } from "./RestaurantCard";
import CarouselCard from "./CarouselCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_API, carouselData } from "./utils/constant";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useCarouselData from "./utils/useCarouselData";
import useRestaurantData from "./utils/useRestaurantData"
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

 

const Body = () =>{

  const {loggedInUser, setUserName} = useContext(UserContext);
const onlineStatus = useOnlineStatus();
const carData = useCarouselData();
const ListOfRestaurants = useRestaurantData();
const [filteredList,setFilteredList] = useState([]);
// console.log(ListOfRestaurants);
const ResDiscountedCard = WithDiscount(RestaurantCard);
// useEffect for res data
useEffect(()=>{
  fetchData();
 }, []);



 const fetchData = async ()=> {
  const data = await fetch(RESTAURANT_API);

  const json = await data.json();
 
  setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }

 const [searchText, setSearch] = useState('');

 if(onlineStatus === false)
 return (
   <h1>Aww, Snap! Looks like you are offline.Please Check your internet connection.</h1>

 )
// We used ternary operators for making conditional rendering work instead of the if else syntax above
//Here carData is the Carousel data.


 if(ListOfRestaurants.length === 0){
  return <Shimmer></Shimmer>
 }




// Conditional Rendering
// if(ListOfCard.length === 0){
//   return <Shimmer></Shimmer>
// }


  return  carData.length === 0 ? <Shimmer></Shimmer> : 
     ( <div className="body">
        <div className="carouselDiv w-100">

        <div className="search flex justify-center bg-slate-200 ">
          {/* This is search box and we are setting its value to searchText, but when we are using searchText in filter callback function, it returns anamalous results and so that's why we are using e.target.value in filter func. to filter out options on every change.*/}
                  <input className="searchBox rounded-md m-1  p-1  box-content" type="text" placeholder="Search Restaurants" value={searchText}
                  onChange={(e)=>{
                    const filteredList = ListOfRestaurants.filter((res)=>{
                      return  res.info.name.toLowerCase().includes(e.target.value.toLowerCase()) || res.info.cuisines.includes(e.target.value.toLowerCase()) ;
                    })
                    setFilteredList(filteredList)
                    setSearch(e.target.value)
                  }}></input>
                  <button className="searchBtn rounded-md bg-orange-200 h-8 w-15 m-1 p-1"
                    onClick={()=>{
                      
                      const filteredList = ListOfRestaurants.filter((res)=>{
                        const condition =  res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                      return condition
                    })

                      setFilteredList(filteredList)

                    }}
                  >Search</button>
                  {/* <input className="border border-black" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} ></input> */}
                
                  </div>
          <h3>What's on your mind today?</h3>
          <div className="cardDiv flex flex-wrap items-center justify-center">
        {
          carData.map((cardData)=>(
            <Link to={`cards/${cardData.action.text}`}><CarouselCard key = {cardData.id} cardData = {cardData} ></CarouselCard></Link>
          ))
        }
    
        </div>

</div>
        
        <div className="filter">
        
          <button className="filter-btn" onClick={()=>{ 
           const updatedListOfRestaurants = ListOfRestaurants.filter((res) =>
              res.info.avgRating >= 4.5
            );
            setFilteredList(updatedListOfRestaurants);

           
            // console.log(updatedListOfRestaurants.length);
            }}>Top Rated Restaurants</button>
           
        </div>
        <div className="res-container flex flex-wrap justify-center items-center">
         {
          filteredList ? filteredList.map((restaurant)=> (
          <Link className="link" to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}> 
        {
          restaurant.info.avgRating >=4 ?   <ResDiscountedCard resData = {restaurant}/> : <RestaurantCard  resData = {restaurant} />
        }
          
          </Link>
          )): ""
         }
          
         
        </div>
        
      </div>
    )
  }
  
export default Body;