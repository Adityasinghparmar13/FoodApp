import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Body = () => {
    const [ListRec,setListRec] = useState([]);
    const [ListSear,setListSear] = useState([]);
    const [SearTxt,setSearTxt] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6888636&lng=86.9660638&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json()
        setListRec(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListSear(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } 

    if(ListRec.length === 0 ) return <Shimmer />;

    return (
        <div className="body">
            <div className="options">
                <div className="search">
                    <input type="text" className="sear-box" value={SearTxt} onChange={(e) => {
                        setSearTxt(e.target.value)
                    }} />
                    <button className="sear-btn" onClick = {() => {
                        const filterlist = ListRec.filter(
                            (res)=> res.info.name.toLowerCase().includes(SearTxt.toLowerCase())
                        )
                        setListSear(filterlist)
                    }} >Search</button>
                </div>
                 
                <button className="filter-btn" onClick={()=>{
                    const filterlist = ListRec.filter(
                        (res) => res.info.avgRating > 4.1
                    )
                    setListSear(filterlist)
                }}>
                Top-Rated Restaurants
                 </button>
            </div>
            <div className="restcont">
                {ListSear.map((restaurant) => (
                    <Link style={{
                        textDecoration: 'none',
                        color: '#000',
                      }} to={"/restaurants/" + restaurant.info.id}><RestCard key={restaurant.info.id} resdata={restaurant}/></Link>
                ))}
            </div>   
        </div>
    )
}

export default Body;