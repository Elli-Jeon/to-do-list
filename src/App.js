import React from 'react'

// CSS
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import Main from './components/Main';
import GlobalState from './context/GlobalState';


const App = () => {
   
    return (
        <div>
                <GlobalState >
                    <GlobalStyle />
                    <Header />
                    <Main />
                </GlobalState>
        </div>
    )
}

export default App;

