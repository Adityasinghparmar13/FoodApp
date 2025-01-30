import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {

    const [btnNameR,setbtnNameR] = useState("Login")

    return(
        <div className = "header">
            <div className = "logo-cont">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className= "navbar">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contact" >Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        btnNameR=="Login" ? setbtnNameR("Logout") : setbtnNameR("Login")
                    }}>{btnNameR}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;