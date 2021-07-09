import React, { useContext } from 'react'
import { MyContext } from '../App' // export 했으니 받아줘서
import styledComponents from '../styles/Header-style'
const { CustomHeader, ThemeSwitchBtn } = styledComponents;

const Header = ({ switchTheme }) => {
    const text = useContext(MyContext);
    console.log(text);
    
    return (
        <CustomHeader>
            <ThemeSwitchBtn onClick={()=>{
                switchTheme();
            }}>Change Theme
            </ThemeSwitchBtn>
        </CustomHeader>
    )
}

export default Header;
