import React from 'react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

// CSS
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header/Header';
import GlobalState from './context/GlobalState';

// pages
import Board from './pages/Board/index'
import Calendar from "./pages/Calendar/index"

const App = () => {
   
    return (
        <div>
                <GlobalState >
                    <GlobalStyle />
                    <Router>
                        <Header />
                        <Route path="/" exact component={Board} />
                        <Route path="/calendar" exact component={Calendar} />
                    </Router>
                </GlobalState>
        </div>
    )
}

export default App;

