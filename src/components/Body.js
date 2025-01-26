import RestCard from "./RestCard";
import ResLis from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    const [ListRec,setListRec] = useState(ResLis)

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterlist = ListRec.filter(
                        (res) => res.info.avgRating > 4.3
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