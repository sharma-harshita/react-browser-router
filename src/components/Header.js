import React from "react";
import { Link , NavLink} from "react-router-dom"

export const Header = () => {
    return(
        <div>
            <h1>BROWSER ROUTER</h1>
            <NavLink to="/home">HOME</NavLink>||
            <Link to="/contact">CONTACT </Link>||
            <Link to="/support">SUPPORT </Link>||
            <Link to="/career">CAREERS</Link>||
            <Link to="/team">TEAM</Link>
        </div>
    )
}


// Link : Helps us to create link and it takes a single attribute which defines that if that specific text has been clicked then to which route it will go.

// Navlink : In this, it take one more extra attribute like activeStyle .With this you can basically identify just by looking at the UI only that which route is active right now.
