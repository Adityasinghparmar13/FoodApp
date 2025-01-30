import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu()
    },[]);

    const fetchMenu = async () => {
        const dat = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.6888636&lng=86.9660638&restaurantId=779171&catalog_qa=undefined&submitAction=ENTER");
            
        const json = await dat.json();
        setResInfo(json.data);
    } 

       if (resInfo === null) return <Shimmer />;
    
    const {
      name,
      cuisines,
      costForTwoMessage,
      costForTwo,
      cloudinaryImageId,
      avgRating,
      deliveryTime,
      totalRatingsString,
    } = resInfo?.cards[2]?.card?.card?.info;
    return (
        <div className="res-men">
            {/* console.log(resInfo) */}
            <h1>{name}</h1>
            <p>{cuisines} - {costForTwoMessage}</p>
            <h3>{avgRating} stars & {totalRatingsString}</h3>
            <h3>Menu</h3>
            <ul>
                <li>Biryani</li>
                <li>Pizza</li>
                <li>Panner</li>
            </ul>
        </div>
    )
}


export default RestMenu;