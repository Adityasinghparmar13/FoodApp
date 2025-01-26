import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
}

export default Header;