import React from 'react'
import MainStyle from '../styles/Main-style'

// Components
import DisplayAreaStyle from '../styles/DisplayArea-style'
import AddAreaStyle from '../styles/ListArea-style'


const Main = () => {
    return (
        <MainStyle>
            <DisplayAreaStyle>
                displayArea
            </DisplayAreaStyle>
            <AddAreaStyle>
                addArea
            </AddAreaStyle>
        </MainStyle>
    )
}

export default Main;
