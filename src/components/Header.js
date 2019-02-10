import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <h1>Portfolio</h1>
        <NavLink exact={true} to="/" activeStyle={{fontWeight: 'bold'}}> Home </NavLink> |
        <NavLink to="/portfolio" activeStyle={{fontWeight: 'bold'}}> Portfolio </NavLink> |
        <NavLink to="/contact" activeStyle={{fontWeight: 'bold'}}> Contact</NavLink>
    </div>
);

export default Header;