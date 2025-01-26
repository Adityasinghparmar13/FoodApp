import { RES_CDN } from "../utils/constants";

const RestCard = (props) => {
    const {resdata} = props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId,costForTwo} = resdata?.info;

    return (
        <div className="rescard">
            <img className="respic" src={RES_CDN + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestCard;