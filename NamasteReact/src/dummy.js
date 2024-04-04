const fetchCarousel = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    // console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
    setCard(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
    
  }


  const [ListOfCard, setCard] = useState([]);
  useEffect(()=>{
    fetchCarousel();
   }, []);
       
        <div className="carouselDiv">
          <h3>What's on your mind today?</h3>
  
          
          <div className="cardDiv">
        {
          ListOfCard.map((cardData)=>(
            <CarouselCard key = {cardData.id} cardData = {cardData} ></CarouselCard>
          ))
        }
          
         
  
                 </div>
  
          
        </div> 

