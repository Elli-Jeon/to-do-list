import React, {useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'

// Login button
import LoginButton from '../LoginButton/LoginButton';

// css
import TotalHeaderStyle from '../../styles/Header-style';

// logincontext
import loginModalContext from '../../context/loginModalContext';

const { HeaderStyle, NavStyle } = TotalHeaderStyle;

const activeStyle = {
    border: '1px solid black',
    background : 'black',
    borderTopLeftRadius : '1rem',
    borderTopRightRadius : '1rem',
    color : 'white',
    padding : '0 1rem',
};

const Header = () => {
    const isModalOpened = useContext(loginModalContext);
    //console.log(isModalOpened)

     
    return (
        <div>
            <HeaderStyle>
                <Link to="/" ><h1>To Do List</h1></Link>
                <NavStyle>
                    <NavLink exact activeStyle={activeStyle} to="/board">To Do</NavLink>
                    <NavLink activeStyle={activeStyle} to="/calendar">Calendar</NavLink>
                    <LoginButton>LOGIN</LoginButton>
                </NavStyle>
            </HeaderStyle>
        </div>
    )
}

export default Header;
