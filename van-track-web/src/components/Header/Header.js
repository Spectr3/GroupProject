import React, {useState} from "react"
import "./Header.css"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import {Button} from "react-bootstrap";

function Header() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

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
                <Link className="header__navitem" to="/profile">
                    Profile
                </Link>
                <Button onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </div>
    )
}

export default Header;
