import React from 'react'
import MainStyle from '../styles/Main-style'

// Components
import DisplayAreaStyle from '../styles/DisplayArea-style'
import ListAreaStyle from '../styles/ListArea-style'


const Main = () => {
    return (
        <MainStyle>
            <DisplayAreaStyle>
                displayArea
            </DisplayAreaStyle>
            <ListAreaStyle>
                listArea
            </ListAreaStyle>
        </MainStyle>
    )
}

export default Main;
