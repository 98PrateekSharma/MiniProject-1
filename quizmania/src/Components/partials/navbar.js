import React from 'react'
import '../../stylesheets/style.css'
import {Link ,NavLink} from 'react-router-dom' 
const Navbar = () => {
    return (

        <div className="nav">
            <nav className="navigation">
                <ul className="navbar">
                    <li className="logo"><a href="/">QuizMania</a></li>
                    <li className="items main"><Link to="#">Login</Link></li>
                    <li className="items main secondary"><Link to="#">JoinQuiz</Link></li>
                    <li className="items"><Link to="#">SignUp</Link></li>
                    <li className="items"><Link to="#">Contact</Link></li>
                    <li className="items"><Link to="#">About us</Link></li>
                    <li className="toggle"><span className="hamburger"></span></li>

                </ul>
            </nav>

        </div>
    )
}
export default Navbar
