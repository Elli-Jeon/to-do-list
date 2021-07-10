import React from 'react'
// CSS
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Main />
        </div>
    )
}

export default App;

