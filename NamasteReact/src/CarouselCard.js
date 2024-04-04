const CarouselCard = (props) =>{
    const {cardData} = props
    return (
      <div className="card w-[100px] h-[100px] p-4">
        <img className="carouselImg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + cardData.imageId}></img>
        {/* {console.log(cardData)} */}
      </div>
    )
  }



  export default CarouselCard;