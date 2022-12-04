import React, {useState} from "react";
import './Hamburger.css'

const Hamburger = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '10%'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    
                </div>
                <ul className="navic" id="nav">
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Blog</a></li>
               <li><a href="#">Gallery</a></li>
               <li><a href="#">Contact</a></li>
             </ul>
                
            </nav>
            

            <div className={menu_class}>
                <ul>
                    <li>About</li>
                    <li>Pages</li>
                    <li>Landing</li>
                    <li>Pages</li>
                    <li>Portfolio</li>
                    <li>Support</li>
                    <li>Docs</li>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger