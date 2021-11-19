import React, {useEffect, useState} from 'react'
import "./Nav.css"

function Nav() {
    const [show, SetShow] = useState(false)

    const TransionNavbar = () => {
        if (window.scrollY > 100) {
            SetShow(true)
        } else
            SetShow(false)
    }

    
    useEffect(() => {
        window.addEventListener("scroll", TransionNavbar)
        return () => {window.removeEventListener("scroll", TransionNavbar)}
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img 
                src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png" 
                alt=""
                className="nav__logo" />

                <img 
                src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" 
                alt=""
                className="nav__avatar" />
            </div>
        </div>
    )
}

export default Nav
