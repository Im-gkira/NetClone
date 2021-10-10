import "./navbar.scss"
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    let [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=>(window.onscroll=null)
    }
    console.log(isScrolled)
    return (
        <div className={isScrolled?"navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + "/media/logo.svg"} alt="logo"/>
                    <Link to="/"  className="link">
                        <span> HomePage</span></Link>
                    <Link to="/series" className="link">
                        <span> Series</span></Link>
                    <Link to="/movies" className="link">
                        <span> Movies</span></Link>
                    <Link to = "/Watch" className="link">
                    <span> New and Hot</span>
                        <span> MyList</span></Link>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span> KID</span>
                    <Notifications className="icon"/>
                    <img src="https://i.waifu.pics/ZrglrV6.jpg" alt="waifu"/>
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Setting</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar