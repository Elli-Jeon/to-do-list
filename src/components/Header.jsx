import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// css
import TotalHeaderStyle from '../styles/Header-style';

const { HeaderStyle, NavStyle } = TotalHeaderStyle;

const activeStyle = {
    border: '1px solid blue',
    borderRadius : '1rem'
};

const Header = () => {
    return (
        <div>
            <HeaderStyle>
                <Link to="/" ><h1>To Do List</h1></Link>
                <NavStyle>
                    <NavLink exact activeStyle={activeStyle} to="/">To Do</NavLink>
                    <NavLink activeStyle={activeStyle} to="/calendar">Calendar</NavLink>
                </NavStyle>
            </HeaderStyle>
        </div>
    )
}

export default Header;
