import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu()
    },[]);

    const fetchMenu = async () => {
        const dat = await fetch(MENU_API + resId);
            
        const json = await dat.json();
        setResInfo(json.data);
    } 

    if (resInfo === null) return <Shimmer />;

    const {name, avgRating, totalRatingsString, costForTwoMessage, cuisines} = resInfo.cards[2].card.card.info;
    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    console.log(itemCards)
    return (
        <div className="res-men">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>{avgRating} stars & {totalRatingsString}</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards.map(res=>
                    <li>{res.card.info.name} - Rs. {res.card.info.price/100 || res.card.info.defaultPrice/100}</li>
                    )}
            </ul>
        </div>
    )
}

export default RestMenu;