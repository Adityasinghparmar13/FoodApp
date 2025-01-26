import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [btnNameR,setbtnNameR] = useState("Login")

    return(
        <div className = "header">
            <div className = "logo-cont">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className= "navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
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