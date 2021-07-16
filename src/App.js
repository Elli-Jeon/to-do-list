import React from 'react'
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

// CSS
import GlobalStyle from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import MainTodo from './components/MainTodo';
import GlobalState from './context/GlobalState';

// pages
import Calendar from "./pages/Calendar/index"

const App = () => {
   
    return (
        <div>
                <GlobalState >
                    <GlobalStyle />
                    <Router>
                        <Header />
                        <Route path="/" exact component={MainTodo} />
                        <Route path="/calendar" exact component={Calendar} />
                    </Router>
                </GlobalState>
        </div>
    )
}

export default App;

