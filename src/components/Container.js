import React, { useState, useEffect } from 'react';
import styledComponents from '../styles/Container-style';

const { CustomContainer } = styledComponents;

const Container = ({ currentThemeText }) => {
    const [data, setData] = useState([]); 

    useEffect(()=>{
        const fetchUser = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            setData(data)
            
        }
        fetchUser()
    },[])

    return (
        <CustomContainer>
            <h1>{currentThemeText}</h1>
           
        </CustomContainer>
    )
}

export default Container;