import React from "react"
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="header__nav">
                <Link className="header__navitem" to="/">
                    Dashboard
                </Link>
                <Link className="header__navitem" to="/stock">
                    Stock
                </Link>
                <Link className="header__navitem" to="/location">
                    Locations
                </Link>
                <Link className="header__navitem" to="/staff">
                    Staff
                </Link>
            </div>
        </div>
    )
}

export default Header;
