import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [ListRec,setListRec] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6888636&lng=86.9660638&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json()
        setListRec(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 

    return ListRec.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterlist = ListRec.filter(
                        (res) => res.info.avgRating > 4.1
                    )
                    setListRec(filterlist)
                }}>
                Top-Rated Restaurants
                 </button>
            </div>
            <div className="restcont">
                {ListRec.map((restaurant) => (
                    <RestCard key={restaurant.info.id} resdata={restaurant}/>
                ))}
            </div>   
        </div>
    )
}

export default Body;